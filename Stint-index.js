const _ = require('lodash');
const readline = require('readline');
const fs = require('fs');

const HAPPINESS_QS = [0, 13, 17];
const COPING_QS = [1, 7, 12];
const ALERTNESS_QS = [2, 6, 15];
const APPEARANCE_QS = [3, 9, 14];
const ENERGY_QS = [3, 8, 11];
const CALMNESS_QS = [5, 10, 16];

class stintIndex {

    constructor(responses) {
        this.resp = responses;
    }

    overallScore() {
        return 0;
    }

    happinessScore() {
        return 0;
    };

}

const QUESTIONS = [
    ["Happiness","happy when chatting with customers"],
    ["Coping","wanted to have fewer things to do","R"],
    ["Alertness","was quick to respond"],
    ["Appearance","didn't present well","R"]
    ["Energy","satisfied with their levels of energy"],
    ["Calmness","restless, anxious or fidgety","R"],
    ["Alertness","satisfied with their reponse times"],
    ["Coping","they don’t get enough time to do all the things I would like them to do","R"],
    ["Energy","very full of energy"],
    ["Appearance","they were untidy","R"],
    ["Calmness","a little tense for no particular reason at all","R"],
    ["Energy","they seemed to have the energy they needed for the tasks"],
    ["Coping","they didn't have the bandwidth to deal with all the things that I wanted them to do","R"],
    ["Happiness","happy go lucky"],
    ["Appearance","didn't have the right uniform","R"],
    ["Alertness","good quality feedback"],
    ["Calmness","slightly nervous over things that I have assue they would be comfortable with","R"],
    ["Happiness","mostly enthusiastic and gets on with things"]
];


exports.stintIndex = stintIndex;
