const { test, expect } = require("bun:test");
const { inspect } = require("util");
const stroff = require("../index.js");

const variablesTrue = [
  false,
  "false",
  "off",
  "inactive",
  "disable",
  "disabled",
  0,
  "0",
  "unactivate",
  "unactivated",
  "False",
  "OFF",
  "INACTIVE",
  "DISABLE",
];

const fakeVariables = [true, "on", "true", "active", "enable", 1];

for (const variableTrue of variablesTrue) {
  test(`check: ${inspect(variableTrue, { colors: true })} equal to ${inspect(true, { colors: true })}`, function () {
    expect(stroff(variableTrue)).toEqual(true);
  });
}

for (const variableTrue of fakeVariables) {
  test(`check: ${inspect(variableTrue, { colors: true })} not equal to ${inspect(true, { colors: true })}`, function () {
    expect(stroff(variableTrue)).toEqual(false);
  });
}
