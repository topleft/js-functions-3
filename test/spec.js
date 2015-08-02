describe("js-functions", function() {

  it('returns a name', function() {
    expect(getStudentName({name: 'Michael', age: 27 })).toEqual("Micheal");
  });

  it("counts letters in an array of strings",function(){
    expect(getTotalLetters(["the","car","is","fast"])).toEqual(12);
  })

  it("takes two args and create an object",function(createObject){
    expect(createObject('city', 'Boulder')).toEqual({"city" : "Boulder"});
  })

  it("returns the value at a negative index",function(){
    expect(getNegativeIndex(['a', 'b', 'c', 'd', 'e'], -3)).toEqual("c");
  })

  it("removes the given character from a string",function(){
    expect(removeCharacter('javascript', 'a')).toEqual("jvscript");
    expect(removeCharacter('javascript', 1)).toEqual("javascript");
    expect(removeCharacter('12345', 2)).toEqual("1345");
  })
  it("returns all key value pairs of an obj as a string joined by a supplied argument",function(){
    expect(ouputObject("is", {john: 10, jerry: 11, jenny: 12 })).toEqual("john is 10, jerry is 11, jenny is 12");
  })
  it("returns the vowels in a string",function(){
    expect(getVowels('javascripting')).toEqual(["a","i"]);
    expect(getVowels("More code")).toEqual(["o","e"]);
  })
  it( "returns true if there are two of each item in the array, false otherwise",function(){
    expect(captureTwins(['m', 'm', 'n', 'n', 's', 's'])).toEqual(true);
    expect(captureTwins(['m', 'm', 'm', 'n', 's', 's'])).toEqual(false);
  })
  it( "takes string of booleans and returns true if any are true",function(){
    expect(testBooleanLogic([false, true, false, false])).toEqual(true);
    expect(testBooleanLogic([false, false, false])).toEqual(false);
  })
  it("returns an array of the unique values in an array",function(){
    expect(getUniqueValues(['m', 'n', 'm', 'r', 'r', 's'])).toEqual(["n","s"]);
    expect(getUniqueValues(['michael', 'ben', 'kerry', 'ben'])).toEqual(["micheal","kerry"]);
  })
});



