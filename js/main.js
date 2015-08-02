// add scripts

console.log("sanity check!");

function getStudentName(obj){
  return obj.name;
};

function getTotalLetters(array){
  var total = 0;
  array.forEach(function(string){ total += string.length});
  return total;
};

function createObject(key, value){
  return {[key]:value};
};

function getNegativeIndex(arr, index){
  var positiveIndex = arr.length + index;
  return arr[positiveIndex];
};

function removeCharacter(string, item){
  return string.split("").map(function(letter){
    if(letter === item.toString()) letter = "";
      else return letter;
    }).join("");
};

function outputObject(joiner , obj){
  var str = ""
  var num = Object.keys(obj).length;
  for (key in obj) {
    num--
    if (num === 0)
      str += key+" "+joiner+" "+obj[key];
    else
      str += key+" "+joiner+" "+obj[key]+", ";
  }
  return str
};











