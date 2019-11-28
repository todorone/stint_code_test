// @ts-ignore
import inquirer from 'inquirer'

import { Answer, Question, QUESTIONS, StintIndex } from './stint'

inquire(QUESTIONS).then(answers => {
  const stint = new StintIndex(answers)
  console.log('Happiness score', stint.getHappinessScore())
  console.log('Overall score', stint.getOverallScore())
})

async function inquire (questions: Question[]): Promise<Answer[]> {
  const answers: Answer[] = []
  for (let q of questions) {
    const answer = await inquirer.prompt([
      {
        name: 'q',
        message: q.message,
        type: 'rawlist',
        choices: [0, 1, 2, 3, 4, 5]
      }
    ])

    answers.push({ ...q, value: answer.q })
  }
  return answers
}
