// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return 'null';
  }
  if (typeof(obj) === 'string') {
    return '"' + obj + '"'; 
  }
  if (Array.isArray(obj)) {
    return '[' + stringifyArray(obj) + ']';
  }
  if (typeof(obj) === 'object') {
    return '{' + stringifyObject(obj) + '}';
  }
  return obj + '';
};

var stringifyArray = function(obj){
  var stringifiedArray = '';
  for (var i = 0; i < obj.length; i++) {
    if (i === 0) {
      stringifiedArray += stringifyJSON(obj[i]);
    } else {
      stringifiedArray += ',' + stringifyJSON(obj[i]);
    }
  }
  return stringifiedArray;
};

var stringifyObject = function(obj){
  var stringifiedObject = '';
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] === 'functions' || keys[i] === 'undefined') {
      continue;
    }
    if (i === 0) {
      stringifiedObject += '"' + keys[i] + '":' + stringifyJSON(obj[keys[i]]);
    } else {
      stringifiedObject += ',"' + keys[i] + '":' + stringifyJSON(obj[keys[i]]);
    }
  }
  return stringifiedObject;
};