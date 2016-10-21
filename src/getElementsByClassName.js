// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

/*
NOTES: "You should use document.body, element.childNodes, and element.classList" - Hack Reactor Instructions

document.body : Returns the <body> element of the current document.
element.classList : Returns a DOMTokenList containing the list of class attributes.
	- DOMTokenList.contains() - Returns true if the underlying string contains token, otherwise false
Tip: To return a collection of a node's element nodes (excluding text and comment nodes), use the children property. eg. document.body.children;
*/

var getElementsByClassName = function(className, node, matches) {
  var matches = (matches === undefined ? [] : matches);
  var currentNode = (node === undefined ? document.body : node);

  //Check the current node's class for a match 
  if (currentNode.classList.contains(className)){
  	matches.push(currentNode);
  }
  //check each of the children of the currentNode via recursion
  for (var i=0; i<currentNode.children.length; i++) {
  	getElementsByClassName(className, currentNode.children[i], matches);
  }
  return matches;
};

