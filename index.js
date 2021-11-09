const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, name) {
  let x = array.filter(element => element.toLowerCase() === name.toLowerCase()); 
  return x;
}

function fuzzyMatch(array, letter) {
    
    let result = array.filter(element => element.substring(0, 1) === letter.substring(0,1));
    return result;
    
  }
  
function matchName(array, name2) {
    return array.filter(element => element.name === name2);
}