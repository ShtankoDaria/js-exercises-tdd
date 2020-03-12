var removeVowelsForWords = require("./remove-vowels-in-array");
test("remove vowels from all words in array", function() {
  var input = ["Irina", "Etza", "Daniel"];

  var result = removeVowelsForWords(input);

  var output = ["__i_a", "___a", "_a_ie_"];


  expect(result).toEqual(output);
  // Arrange
  // Act
  // Assert
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
