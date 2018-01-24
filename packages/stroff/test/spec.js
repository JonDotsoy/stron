/* global describe, it */

const {expect} = require('chai')
const {inspect} = require('util')
const stroff = require('../index')

describe('stroff', function () {
  const variablesTrue = [
    false,
    'false',
    'off',
    'inactive',
    'disable',
    'disabled',
    0,
    '0',
    'unactivate',
    'unactivated'
  ]
  
  const fakeVariables = [
      true,
      'on',
      'true',
      'active',
      1,
  ]

  for (const variableTrue of variablesTrue) {
    it(`check: ${inspect(variableTrue, {colors: true})} equal to ${inspect(true, {colors: true})}`, function () {
      expect(stroff(variableTrue)).to.equal(true)
    })
  }

  for (const variableTrue of fakeVariables) {
    it(`check: ${inspect(variableTrue, {colors: true})} not equal to ${inspect(true, {colors: true})}`, function () {
      expect(stroff(variableTrue)).to.not.equal(true)
    })
  }
})
