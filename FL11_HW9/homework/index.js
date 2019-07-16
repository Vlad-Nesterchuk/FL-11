function getNumbers(stringWithNum) {
  let onlyNum = [];
  for (let i = 0; i < stringWithNum.length; ++i) {
    if (!isNaN(stringWithNum[i])) {
      onlyNum.push(Number.parseInt(stringWithNum[i]));
    }
  }
  return onlyNum;
}

function findTypes() {
  let typesObj = {};
  for (let i = 0; i < arguments.length; i++) {
    if (typesObj.hasOwnProperty(typeof arguments[i])) {
      typesObj[typeof arguments[i]] += 1;
    } else {
      typesObj[typeof arguments[i]] = 1;
    }

  }
  return typesObj;
}

function executeForEach(array, funcForEach) {
  for (let i = 0; i < array.length; i++) {
    funcForEach(array[i]);
  }
}

function mapArray(array, funcTransformer) {
  let transformedArray = [];
  executeForEach(array, function (el) {
    transformedArray.push(funcTransformer(el))
  });
  return transformedArray;
}

function filterArray(array, condition) {
  let filteredArr = [];
  executeForEach(array, function (el) {
    if (condition(el)) {
      filteredArr.push(el)
    }
  });
  return filteredArr;
}

function showFormattedDate(date) {
  return 'Date: ' + date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric'
  }) + ' ' + date.toLocaleString('en-US', {year: 'numeric'});
}

function canConvertToDate(stringData) {
  return !isNaN(new Date(stringData));
}


function daysBetween(firDate, secDate) {
  const milliSecondsInDay = 86400000;
  return Math.ceil(Math.abs(secDate - firDate) / milliSecondsInDay);
}

function getAmountOfAdultPeople(data) {
  const adultAgeInDays = 6570;
  return filterArray(data, function (human) {
    return daysBetween(new Date(human.birthday), new Date()) > adultAgeInDays;
  }).length;
}

function keys(obj) {
  let keyArr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keyArr.push(key);
    }
  }
  return keyArr;
}

function values(obj) {
  let valuesArr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      valuesArr.push(obj[key]);
    }
  }
  return valuesArr;
}
