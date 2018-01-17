// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;
var idx = 0;
// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  if (json[0] === '[') {
    var JSONObject = [];
  } else if (json[0] === '{') {
    idx++;
    var JSONObject = parseObject(json);
    
  }
  return JSONObject;

};

var parseObject = function(json) {
  var JSONObject = {};
  //var tidx = idx;
  var objKeyVal = [];
  while (json[idx] === '"') {
    var objKeyVal = parseKeyValue(json);
    JSONObject[objKeyVal[0]] = objKeyVal[1];
  }
  return JSONObject;
};

var parseKeyValue = function(json) {
  
  var getKey = new RegExp('".+":\s?');
  var getValMid = new RegExp('\S+,\s?"');
  var getValEnd = new RegExp('\S+}');
  var key = getKey.exec(json.slice(idx))[0];
  idx += key.length;
  key = key.slice(1, key.lastIndexOf('"'));
  //var key2 = getKey.exec(json.slice(idx));
  //console.log(key);
  //console.log(idx);

  var value = getValMid.exec(json.slice(idx));
  if (value == null) {
    value = getValEnd.exec(json.slice(idx))[0];
    idx += value.length;
    value = value.slice(0,-1);
  } else {
    value = getValMid.exec(json.slice(idx))[0];
    idx += value.lastIndexOf(",") + 1;
    value = value.slice(0, value.lastIndexOf(","));
  }

  return [key, value];
};

var parseArray = function(json) {
  var JSONArray = [];
  
}