var greetPeople = require("./greet-people");
test("print list of names prefixed with Hello", function() {
  // Arrange
  // Act
  // Assert
  
  var mentors = ["Irina ", "Ashleigh", " Etza"];

  var result = greetPeople(mentors);

  var output = "Hello Irina Ashleigh Etza";


  expect(result).toEqual(output);
});

