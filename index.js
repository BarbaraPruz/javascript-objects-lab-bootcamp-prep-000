var recipes = {};

function updateObjectWithKeyAndValue(obj, property, value) {
  var newObj = Object.assign({}, obj);
  newObj[property]=value;
  return newObj;
}

