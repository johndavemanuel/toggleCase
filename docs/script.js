document.getElementById("js-btn-convert").addEventListener("click", function () {
  let source = document.getElementById("input").value;
  let convertType = document.getElementById("convert-type").value;
  console.log(convertType);
  switch (convertType) {
    case 'titleCase':
      document.getElementById("output").value = titleCase(source);
      break;
    case 'sentenceCase':
      document.getElementById("output").value = sentenceCase(source);
      break;
    case 'upperCase':
      document.getElementById("output").value = upperCase(source);
      break;
    case 'lowerCase':
      document.getElementById("output").value = lowerCase(source);
      break;
    case 'removeVowels':
      document.getElementById("output").value = removeVowels(source);
      break;
    case 'removeConsonants':
      document.getElementById("output").value = removeConsonants(source);
      break;
    case 'studlyCaps':
      document.getElementById("output").value = studlyCaps(source);
      break;
    case 'camelCase':
      document.getElementById("output").value = camelCase(source);
      break;
    case 'underscoredText':
      document.getElementById("output").value = underscoredText(source);
      break;
    case 'removeDuplicateSpace':
      document.getElementById("output").value = removeDuplicateSpace(source);
      break;
    case 'reverseText':
      document.getElementById("output").value = reverseText(source);
      break;
  }
});


// TITLE CASE
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

// SENTENCE CASE
function sentenceCase(str) {
  str = str.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
    return c.toUpperCase();
  });
  return str;
}

// UPPERCASE
function upperCase(str) {
  str = str.toUpperCase();
  return str;
}

// LOWERCASE
function lowerCase(str) {
  str = str.toLowerCase();
  return str;
}

// REMOVE VOWEL
function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

// REMOVE CONSONANTS
function removeConsonants(str) {
  return str.replace(/[BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz]/gi, '');
}

//  STUDLY CAPS
function studlyCaps(str, seed = Date.now()) {
  if (typeof str !== 'string') {
    return str;
  }
  return str.split('').map((c) => {
    let transform = Math.random() >= 0.5 ? 'toUpperCase' : 'toLowerCase';
    return c[transform]();
  }).join('');
}

// CAMEL CASE
function camelCase(str) {
  return str.replace(/^([A-Z])|[\s-_]+(\w)/g, function(match, p1, p2, offset) {
      if (p2) return p2.toUpperCase();
      return p1.toLowerCase();
  });
}

// UNDERSCORED TEXT
function underscoredText(str) {
  return str.split(' ').join('_');
}

// REMOVE DUPLICATE SPACE
function removeDuplicateSpace(str) {
  return str.replace(/\s+/g, " ");
}

// BACKWARD TEXT
function reverseText(str) {
  return str.split(/\s/).reverse().join(" ");
}