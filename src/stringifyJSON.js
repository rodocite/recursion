// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = [];
  var count = 0;
  var doubleQuote = String.fromCharCode(34);
  var isPrimitive = typeof obj === 'number' ||
                    typeof obj === 'boolean' ||
                    obj === null;

  var isString = typeof obj === 'string';
  var isArray = Array.isArray(obj);

  if(isPrimitive) {
    //base case 1 - primitives other than strings
    return String(obj);

  } else if(isString) {
    //base case 2 - strings
    return doubleQuote + obj + doubleQuote;

  } else if(obj === undefined || typeof obj === 'function') {
    //terminating condition
    return undefined;

  } else if(isArray) {
    //recursive condition for arrays
    _.each(obj, function(element, index) {
      result[index] = stringifyJSON(element);
    });

    return '[' + result + ']'
    
  } else {
    //recursive condition for objects
    _.each(obj, function(value, key) {
      if(value !== undefined && typeof value !== 'function'){
        result[count] = stringifyJSON(key) + ':' + stringifyJSON(value);
        count++;
      }
    });

    return '{' + result + '}'
  }
};