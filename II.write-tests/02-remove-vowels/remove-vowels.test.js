var removeVowels = require("./remove-vowels");
test("remove vowels from word", function() {
  

  var result = removeVowels('samuel');

  var output = "_a_ue_";


  expect(result).toEqual(output);
  // Arrange
  // Act
  // Assert
});
