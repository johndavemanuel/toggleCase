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
    case 'backwardText':
      document.getElementById("output").value = backwardText(source);
      break;
    case 'scrambleText':
      document.getElementById("output").value = scrambleText(source);
      break;
    case 'encodeURL':
      document.getElementById("output").value = encodeURL(source);
      break;
    case 'decodeURL':
      document.getElementById("output").value = decodeURL(source);
      break;
    case 'rot13':
      document.getElementById("output").value = rot13(source);
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
  return str.replace(/^([A-Z])|[\s-_]+(\w)/g, function (match, p1, p2, offset) {
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
function backwardText(str) {
  return str.split('').reverse().join("");
}

// REVERSE TEXT
function reverseText(str) {
  return str.split(/\s/).reverse().join(" ");
}

// SCRAMBLE TEXT
function scrambleText(str) {
  var newArrayText = [];
  var newtext = '';
  var text = str.replace(/[\r\n]/g, '').split(' ');

  text.map(function (v) {
    v.split('').map(function () {
      var hash = Math.floor(Math.random() * v.length);
      newtext += v[hash];
      v = v.replace(v.charAt(hash), '');
    });
    newArrayText.push(newtext);
    newtext = '';
  });
  var x = newArrayText.map(v => v.split('').join('')).join(' ');
  return x.split('').map(v => v).join('');
}

// ENCODE URL
function encodeURL(str) {
  return encodeURIComponent(str).replace(/'/g, "%27").replace(/"/g, "%22");
}

// DECODE URL
function decodeURL(str) {
  return decodeURIComponent(str.replace(/\+/g, " "));
}

//ROT13
function rot( t, u, v ) {
  return String.fromCharCode( ( ( t - u + v ) % ( v * 2 ) ) + u );
 }

function rot13(s) {
  var b = [],
    c, i = s.length,
    a = 'a'.charCodeAt(),
    z = a + 26,
    A = 'A'.charCodeAt(),
    Z = A + 26;
  while (i--) {
    c = s.charCodeAt(i);
    if (c >= a && c < z) {
      b[i] = rot(c, a, 13);
    } else if (c >= A && c < Z) {
      b[i] = rot(c, A, 13);
    } else {
      b[i] = s.charAt(i);
    }
  }
  return b.join('');
}