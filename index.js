var katzDeli = []

//takes two arguments, one for an array and one for a person's name
function takeANumber(katzDeliLine, newPerson) {
//we need to use a method that will add a person to back of the array when called as argument
  katzDeliLine.push(newPerson)
  //Find a way to get number of people in array.
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

//create function that will take an array as parameter
function nowServing(line) {
//Seems like condition statement since I will return two different outcomes based on two different conditions
//First condition is no one in line
  if (line.length === 0) {
    return `There is nobody waiting to be served!`
//Second condition return who is up and takes them out of array
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

if new person thank you for choosing Deli
function thankYouDeli(newPerson) {
  return `${newPerson} thank you for visiting Katz!`
}
//take argument line
//create object using that array
//return string The line is currently: 1. Ada, 2. Grace
//if no one is online return string "The line is currently empty."
  //var newArray = []this equals empty array
function currentLine(line) {
  var newArray = []
  if (line.length === 0) {
    return `The line is currently empty.`
  } else {
    for (var i = 0; i < line.length; i++) {
      newArray.push(`${i + 1}. ${line[i]}`)
    }
  }
  return `The line is currently: ${newArray.join(", ")}`
}
