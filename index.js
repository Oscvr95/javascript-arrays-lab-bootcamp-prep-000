var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
}

var kittens = ["Milo", "Otis", "Garfield"] //define your array here


function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}

var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}

var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function appendKitten(name) {
  kittens.concat(name)
}

function appendKitten(name) {
  function list() {
  return Array.prototype.slice.call(name)
}
}
