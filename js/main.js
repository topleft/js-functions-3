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

function getVowels(string){
  var v = ["a", "e", "i", "o", "u"];
  var results = [];
  for (var i = 0; i < v.length; i++) {
     if(string.indexOf(v[i]) !== -1)
      results.push(v[i]);
   };
   return results;

};

function captureTwins(arr){
  if(arr.length % 2 !== 0)
    return false;
  else {
    var count = 0;
    arr.forEach(function(item1){
      arr.forEach(function(item2){
        if(item1 === item2)
          count ++;
      });
    });
    return count === arr.length*2;
  }
};

function testBooleanLogic(arr){
  if(arr.indexOf(true) !== -1)
    return true;
  else return false;
};

function getUniqueValues(arr){
    var results = [];
    arr.forEach(function(item1){
      var count = 0;
      arr.forEach(function(item2){
        if(item1 === item2)
          count ++;
      });
      if (count === 1)
        results.push(item1);
    });
    return results;
};









