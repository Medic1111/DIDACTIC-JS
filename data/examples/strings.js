const stringsExObj = {
  length: ``,
  "slice()": ``,
  "substring()": ``,
  "substr()": ``,
  "replace()": ``,
  "replaceAll()": ``,
  "toUpperCase()": ``,
  "toLowerCase()": ``,
  //
  "concat()": `
  let text1 = "Hello";
  let text2 = "world!";
  let result = text1.concat(" ", text2);
  console.log(result);
  // output: Hello world!
  `,
  //
  "trim()": `
  let text = "       Hello World!        ";
  let result = text.trim();
  console.log(result);
  // output: Hello World! (with no spaces)
  `,
  //
  "trimStart()": `
  let text = "       Hello World!        ";
  let result = text.trimStart();
  console.log(result);
  // output: Hello World! (with no spaces at the beginning)
  `,
  //
  "trimEnd()": `
  let text = "       Hello World!        ";
  let result = text.trimEnd();
  console.log(result);
  // output: Hello World! (with no spaces at the end)
  `,
  //
  "padStart()": ``,
  "padEnd()": ``,
  "charAt()": `
  const sentence = 'The quick brown fox jumps over the lazy dog.';
  const index = 4;
  console.log('The character at index '+ index + ' is '+ sentence.charAt(index)');
  // Expected output: "The character at index 4 is q"
  `,
  "charCodeAt()": ``,
  "split()": ``,
};

module.exports = { stringsExObj };
