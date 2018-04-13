var chocolateBars= ["snickers", "hundred grand", "kitkat", "skittles"]
var array = new Array()
function addElementToBeginningOfArray (array, element) {
  [element, ...array]
  var newarray= [element, ...array]
  return newarray
}
function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift (element)
  return array
}