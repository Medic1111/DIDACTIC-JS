const stringsExObj = {
  "length": `
  const str = 'Life, the universe and everything. Answer:';
  // console.log(`${str} ${str.length}`);
  // Expected output: "Life, the universe and everything. Answer: 42"
  `,
  //
  "slice()": `
  const str = 'The quick brown fox jumps over the lazy dog.';
  console.log(str.slice(31));
  // output: "the lazy dog."
  `,
  //
  "substring()": `
  const str = 'Mozilla';
  console.log(str.substring(1, 3));
  // output: "oz"
  `,
  //
  "substr()": `
  //*NO LONGER RECOMMENDED, SUBSTRING() OR SLICE() IS BETTER SUPPORTED FOR MODERN BROWSWERS 
  const str = 'Mozilla';
  console.log(str.substr(1, 2));
  // output: "oz"
  `,
  //
  "replace()": `
  const p = 'The quick brown fox jumps over the lazy dog.'
  console.log(p.replace('dog', 'monkey'));
  // output: "The quick brown fox jumps over the lazy monkey."
  `,
  //
  "replaceAll()": `
  const p = 'The quick brown fox jumps over the lazy dog.';
  console.log(p.replaceAll('dog', 'monkey'));
  // output: "The quick brown fox jumps over the lazy monkey."
  `,
  //
  "toUpperCase()": `
  const sentence = 'The quick brown fox jumps over the lazy dog.';
  console.log(sentence.toUpperCase());
  // output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
  `,
  //
  "toLowerCase()": `
  const sentence = 'The quick brown fox jumps over the lazy dog.';
  console.log(sentence.toLowerCase());
  // output: "the quick brown fox jumps over the lazy dog."
  `,
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
  "padStart()": `
  const str1 = '5';
  console.log(str1.padStart(2, '0'));
  // output: "05"
  `,
  //
  "padEnd()": `
  const str1 = 'Breaded Mushrooms';
  console.log(str1.padEnd(25, '.'));
  // output: "Breaded Mushrooms........"
  `,
  //
  "charAt()": `
  const sentence = 'The quick brown fox jumps over the lazy dog.';
  const index = 4;
  console.log('The character at index '+ index + ' is '+ sentence.charAt(index)');
  // Expected output: "The character at index 4 is q"
  `,
  "charCodeAt()": `
  const sentence = 'The quick brown fox jumps over the lazy dog.';
  const index = 4;
  //console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
  // output: "The character code 113 is equal to q"
  `,
  "split()": `
  const str = 'The quick brown fox jumps over the lazy dog.';
  const words = str.split(' ');
  console.log(words[3]);
  // output: "fox"
  `,
};

module.exports = { stringsExObj };
