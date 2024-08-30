/* Challenge Brief:
Calculate Average Scores:

You need to calculate the average score for two teams (Dolphins and Koalas) based on three given scores for each team.
Determine Winner:

Compare the average scores of the two teams.
Declare a winner if one team's average score is at least double the other team's average score.
If no team meets the double score condition, declare that there is no winner.
Test Data:
Test Data 1:

Dolphins' scores: 44, 23, 71
Koalas' scores: 65, 54, 49
Test Data 2:

Dolphins' scores: 85, 54, 41
Koalas' scores: 23, 34, 27*/


const average = (a, b, c) => (a + b + c) / 3;