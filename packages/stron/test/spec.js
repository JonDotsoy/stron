/* global describe, it */

const {expect} = require('chai')
const {inspect} = require('util')
const stroff = require('../index')

describe('stroff', function () {
  const variablesTrue = [
    true,
    'true',
    'on',
    'active',
    'enable',
    'enabled',
    1,
    '1',
    'activate',
    'activated'
  ]
  
  const fakeVariables = [
      false,
      'off',
      'false',
      'inactive',
      0,
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
