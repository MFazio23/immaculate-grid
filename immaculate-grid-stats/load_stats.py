# Read in JSON file
import json
from collections import Counter

json_path = 'immaculate-grid-sr.json'

with open(json_path, 'r') as file:
    data = json.load(file)
    file.close()

correct_answers_grids = list(grid['correctAnswers'] for _, grid in data.items())

correct_answers_list = [answer for grid in correct_answers_grids for answer in grid]
correct_answers_raw = [answer for grid in correct_answers_list for answer in grid]

correct_answers = list(answer for answer in correct_answers_raw if answer is not None)

correct_answer_counts = Counter(correct_answers)

for answer, count in correct_answer_counts.most_common():
    print(f"{answer}: {count}")