import os
import time
from datetime import datetime
from random import randint

import firebase_admin
import flask
import functions_framework
import requests
from firebase_admin import credentials, db

firebase_admin_file_name = os.environ.get('FIREBASE_ADMIN_FILE_NAME')
firebase_database_url = os.environ.get('FIREBASE_DATABASE_URL')

base_url = 'https://api.sports-reference.com/v1/br/grids/'
day_one = datetime(2023, 4, 4)


def initialize_firebase():
    cred = credentials.Certificate(firebase_admin_file_name)
    firebase_admin.initialize_app(cred, {
        'databaseURL': firebase_database_url
    })


def is_firebase_initialized():
    try:
        firebase_admin.get_app()
        return True
    except ValueError:
        return False


# Download the grid or grids
def download_grid(grid_id):
    response = requests.get(f'{base_url}{grid_id}')

    return response.json()


def get_grid_id_for_date(date_string: str) -> int:
    date = datetime.strptime(date_string, "%Y-%m-%d")
    days_between = (date - day_one).days

    # There were two grids on 2023-07-11
    seven_eleven_bonus = 1 if date >= datetime(2023, 7, 11) else 0

    grid_id = days_between + seven_eleven_bonus + 1

    return grid_id


# Update the grid in Firebase Realtime database
def update_grid(grid):
    grid_id = grid['gridId']
    print(f"\tUpdating grid {grid_id}...")
    ref = db.reference(f'immaculate-grid/{grid_id}')
    ref.set(grid)


@functions_framework.http
def update_grid_function(request: flask.Request):
    if not is_firebase_initialized():
        initialize_firebase()

    request_json = request.get_json(silent=True) or {}

    grid_date = request_json.get('gridDate', datetime.today().strftime('%Y-%m-%d'))

    start_grid_id = request_json.get('startGridId', get_grid_id_for_date(grid_date))
    end_grid_id = request_json.get('endGridId', start_grid_id)

    grid_text = f"Grid {start_grid_id}" if start_grid_id == end_grid_id else f"Grids {start_grid_id} - ${end_grid_id}"

    print(f"Grabbing {grid_text}...")

    for grid_id in range(start_grid_id, end_grid_id + 1):
        pause_time = randint(2, 5)
        print(f"\tUpdating grid {grid_id} then pausing {pause_time} seconds...")
        grid = download_grid(grid_id)
        update_grid(grid)
        time.sleep(pause_time)

    return {
        "message": f"Grids updated!",
        "gridCount": end_grid_id - start_grid_id + 1,
    }
