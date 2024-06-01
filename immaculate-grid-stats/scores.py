import json

json_path = 'immaculate-grid-sr.json'

with open(json_path, 'r') as file:
    data = json.load(file)
    file.close()

grids = list({'gridId': grid_id.replace('-sr', ''), **grid} for grid_id, grid in data.items())

for grid in grids:
    grid['correctAnswerList'] = [answer for grid in grid['correctAnswers'] for answer in grid]
    grid['incorrectAnswerList'] = [answer for grid in grid['incorrectAnswers'] for answer in grid]
    grid['correctAnswerCount'] = len(grid['correctAnswerList']) - grid['correctAnswerList'].count(None)
    grid['rarity'] = int(grid['rarity']) if 'rarity' in grid else -1

immaculate_grids = [grid for grid in grids if grid['correctAnswerCount'] == 9]

for grid in sorted(immaculate_grids, key=lambda g: g.get('rarity', -1), reverse=True):
    print(grid['gridId'])
    print(grid.get('rarity'))
    print()
