const { test, expect } = require("bun:test");
const { inspect } = require("util");
const stron = require("../index.js");

const variablesTrue = [
  true,
  "true",
  "on",
  "active",
  "enable",
  "enabled",
  1,
  "1",
  "activate",
  "activated",
];

const fakeVariables = [false, "off", "false", "inactive", 0];

for (const variableTrue of variablesTrue) {
  test(`check: ${inspect(variableTrue, { colors: true })} equal to ${inspect(true, { colors: true })}`, function () {
    expect(stron(variableTrue)).toEqual(true);
  });
}

for (const variableTrue of fakeVariables) {
  test(`check: ${inspect(variableTrue, { colors: true })} not equal to ${inspect(true, { colors: true })}`, function () {
    expect(stron(variableTrue)).toEqual(false);
  });
}
