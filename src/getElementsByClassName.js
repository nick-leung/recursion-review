// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var nodeArray = [];
  
  var traverseNodes = function(className, currentNode){
    var classList = currentNode.classList;
    if (classList && classList.contains(className)){
      nodeArray.push(currentNode);
    }
    var nodeChildren = currentNode.childNodes;
    for (var i = 0; i < nodeChildren.length; i++){
      traverseNodes(className, nodeChildren[i]);
    }
  };

  traverseNodes(className, document.body);
  
  return nodeArray;
};
