'use strict'
/* global actor */

const verifyPageData = require('../../../test-data').verifyPageData

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {

  },
  buttons: {
    saveAndContinue: 'input.button'
  },

  open () {
    I.amOnPage('/legal/claim/total')
  },

  checkFeeTotalForRange () {
    I.see('Issue fee (based on £6,000 higher value)')
    I.see(verifyPageData.feesPaid)
    I.click(this.buttons.saveAndContinue)
  },

  checkFeeTotalForCanNotStateValue () {
    I.see('Issue fee (no higher value given)')
    I.see(verifyPageData.maxFeePaid)
    I.click(this.buttons.saveAndContinue)
  }

}
