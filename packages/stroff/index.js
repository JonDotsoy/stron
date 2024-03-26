"use static";

const validatorOnRegExp = /^(off|inactive|false|disabled?|0|unactivated?)$/i;

/**
 * @param {string} str string to validate if is "on"
 * @returns {boolean} validation
 */
module.exports = function stron(str) {
  return validatorOnRegExp.test(str);
};
