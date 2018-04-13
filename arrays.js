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
function addElementToEndOFArray (array, element) {
  [...array, element]
  var newarray= [...array, element]
  return newarray
}
function destructivelyAddElementToEndOfArray (array, element) {
  array.push (element)
  return array
}