"use static";

const validatorOnRegExp = /^(on|active|true|enabled?|1|activated?)$/i;

/**
 * @param {string} str string to validate if is "on"
 * @returns {boolean} validation
 */
module.exports = function stron(str) {
  return validatorOnRegExp.test(str);
};
