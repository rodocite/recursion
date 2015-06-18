// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var result = [];
  var node = this.childNodes || document.childNodes;

  if(_.contains(this.classList, className)) {
    result.push(this);
  }

  _.each(node, function(childNode) {
    result.push(getElementsByClassName.call(childNode, className));
  });

  return _.flatten(result);
};
