// TODO: add checks for each function to assert that we are operating on numbers

/**
 * @param {number} lv
 * @param {number} rv
 * @returns {number}
 */
function add(lv, rv) {
  return lv + rv;
}

/**
 * @param {number} lv
 * @param {number} rv
 * @returns {number}
 */
function substract(lv, rv) {
  return lv - rv;
}

/**
 * @param {number} lv
 * @param {number} rv
 * @returns {number}
 */
function multiply(lv, rv) {
  return lv * rv;
}

/**
 * @param {number} lv
 * @param {number} rv
 * @return {number|null}
 */
function divide(lv, rv) {
  if (rv === 0) {
    return null;
  }

  return lv / rv;
}


