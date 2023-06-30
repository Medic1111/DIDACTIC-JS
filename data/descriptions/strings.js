const stringsObj = {
  length: `
  The length data property of a String value contains the length of the string in UTF-16 code units.
  `,
  //
  "slice()": `
  method extracts a part of a string
  returns the extracted part in a new string
  method does not change the original string
  The start and end parameters specifies the part of the string to extract
  A negative number selects from the end of the string
  `,
  //
  "substring()": `
  extracts characters, between two indices (positions), from a string, and returns the substring
  extracts characters from start to end (exclusive)
  does not change the original string
  If start is greater than end, arguments are swapped
  Start or end values less than 0, are treated as 0
  `,
  //
  "substr()": `
  extracts a part of a string
  begins at a specified position, and returns a specified number of characters
  method does not change the original string
  To extract characters from the end of the string, use a negative start position
  `,
  //
  "replace()": `
  searches a string for a value or a regular expression
  returns a new string with the value(s) replaced
  method does not change the original string
  `,
  //
  "replaceAll()": `
  method searches a string for a value or a regular expression
  method returns a new string with all values replaced
  method does not change the original string
  method was introduced in JavaScript 2021
  If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown
  `,
  //
  "toUpperCase()": `
  returns string converted to uppercase
  `,
  //
  "toLowerCase()": `
  string converted to lowercase
  `,
  //
  "concat()": `
  joins two or more strings
  does not change the existing strings
  method returns a new string
  `,
  //
  "trim()": `
  removes whitespace from both sides of a string
  does not change the original string
  `,
  //
  "trimStart()": `
  removes whitespace from the start of a string
  does not change the original string
  `,
  //
  "trimEnd()": `
  removes whitespace from the end of a string
  does not change the original string
  `,
  //
  "padStart()": `
  method pads a string from the start
  pads a string with another string (multiple times) until it reaches a given length.
  `,
  //
  "padEnd()": `
  method pads a string at the end
  method pads a string with another string (multiple times) until it reaches a given length
  `,
  //
  "charAt()": `
  method returns the character at a specified index (position) in a string
  `,
  //
  "charCodeAt()": `
  returns the Unicode of the character at a specified index (position) in a string
  `,
  //
  "split()": `
  method splits a string into an array of substrings
  returns the new array
  method does not change the original string
  If (" ") is used as separator, the string is split between words
  `,
};

module.exports = { stringsObj };
