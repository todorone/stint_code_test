import { QUESTIONS, StintIndex, Answer } from './stint'

const assert = require('assert')
const Chance = require('chance')

describe('StintIndex', () => {
  let chance

  before(() => chance = new Chance())

  describe('getOverallScore()', () => {
    it('should return 50 when all responses are 0', () => {
      const answers: Answer[] = QUESTIONS.map(q => ({ ...q, value: 0 }))
      const ui = new StintIndex(answers)
      assert.equal(50, ui.getOverallScore())
    })
  })

  describe('getHappinessScore()', () => {
    it('should return 100 when all happiness responses are 5', () => {
      const answers: Answer[] = QUESTIONS.map(q => ({ ...q, value: chance.natural({ min: 0, max: 5 }) }))
      answers[0].value = 5
      answers[13].value = 5
      answers[17].value = 5
      const ui = new StintIndex(answers)
      assert.equal(100, ui.getHappinessScore())
    })
  })
})
