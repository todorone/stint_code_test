const MAX_VALUE = 5

export type Question = { category: string; message: string; reversed?: boolean }
export type Answer = Question & { value: number }

export class StintIndex {
  categories: string[]

  answers: Answer[]

  constructor (answers: Answer[]) {
    this.answers = answers

    const categories = new Set<string>()
    QUESTIONS.forEach(q => categories.add(q.category))

    this.categories = Array.from<string>(categories)
  }

  getOverallScore () {
    return average(this.categories.map(category => this.getCategoryScore(category)))
  }

  getHappinessScore () {
    return this.getCategoryScore('Happiness')
  }

  getCategoryScore (category: string): number {
    const answers = this.answers.filter(a => a.category === category)

    return (
      average(
        answers.map(a => a.reversed ? MAX_VALUE - a.value : a.value)
      ) / MAX_VALUE * 100
    )
  }
}

function average (values: number[]) {
  let sum = 0
  values.forEach(value => sum += value)
  return sum / values.length
}

export const QUESTIONS: Question[] = [
  { category: 'Happiness', message: 'happy when chatting with customers' },
  { category: 'Coping', message: 'wanted to have fewer things to do', reversed: true },
  { category: 'Alertness', message: 'was quick to respond' },
  { category: 'Appearance', message: 'didn\'t present well', reversed: true },
  { category: 'Energy', message: 'satisfied with their levels of energy' },
  { category: 'Calmness', message: 'restless, anxious or fidgety', reversed: true },
  { category: 'Alertness', message: 'satisfied with their reponse times' },
  {
    category: 'Coping',
    message: 'they don’t get enough time to do all the things I would like them to do',
    reversed: true
  },
  { category: 'Energy', message: 'very full of energy' },
  { category: 'Appearance', message: 'they were untidy', reversed: true },
  { category: 'Calmness', message: 'a little tense for no particular reason at all', reversed: true },
  { category: 'Energy', message: 'they seemed to have the energy they needed for the tasks' },
  {
    category: 'Coping',
    message: 'they didn\'t have the bandwidth to deal with all the things that I wanted them to do',
    reversed: true
  },
  { category: 'Happiness', message: 'happy go lucky' },
  { category: 'Appearance', message: 'didn\'t have the right uniform', reversed: true },
  { category: 'Alertness', message: 'good quality feedback' },
  {
    category: 'Calmness',
    message: 'slightly nervous over things that I have assue they would be comfortable with',
    reversed: true
  },
  { category: 'Happiness', message: 'mostly enthusiastic and gets on with things' }
]
