// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var result = [];
  //node variable used to initialize traversal
  var node = this.childNodes || document.childNodes;

  //base case
  if(_.contains(this.classList, className)) {
    result.push(this);
  }

  //recursive condition
  //.call used to retain context for traversal
  //also pushes the summation of valid values for the current position in the traversal
  _.each(node, function(childNode) {
    result.push(getElementsByClassName.call(childNode, className));
  });

  return _.flatten(result);
};
