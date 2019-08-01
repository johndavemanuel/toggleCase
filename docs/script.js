var app = new Vue({
  el: '#app',
  data: {
    textInput: '',
    textOutput: '',
    selectedCase: '',
    textCases: [{
        value: 'titleCase',
        text: 'Title Case'
      },
      {
        value: 'sentenceCase',
        text: 'Sentence Case'
      },
      {
        value: 'upperCase',
        text: 'Upper Case'
      },
      {
        value: 'lowerCase',
        text: 'Lower Case'
      },
      {
        value: 'removeVowels',
        text: 'Remove Vowels'
      },
      {
        value: 'removeConsonants',
        text: 'Remove Consonants'
      },
      {
        value: 'camelCase',
        text: 'Camel Case'
      },
      {
        value: 'studlyCaps',
        text: 'Studly Caps'
      },
      {
        value: 'underscoredText',
        text: 'Underscored Text'
      },
      {
        value: 'removeDuplicateSpace',
        text: 'Remove Duplicate Space'
      },
      {
        value: 'reverseText',
        text: 'Reverse Text'
      },
      {
        value: 'backwardText',
        text: 'Backward Text'
      },
      {
        value: 'scrambleText',
        text: 'Scramble Text'
      },
      {
        value: 'encodeURL',
        text: 'Encode URL'
      },
      {
        value: 'decodeURL',
        text: 'Decode URL'
      },
      {
        value: 'rot13',
        text: 'ROT13'
      }
    ]
  },
  methods: {
    getSelectedCase: function (event) {
      this.selectedCase = event.target.value;
    },
    convertText: function () {
      if (this.textInput == '') {
        alert("Source is empty");
        return;
      }

      if (this.selectedCase == '') {
        alert("Select convert type");
        return;
      }
      switch (this.selectedCase) {
        case 'titleCase':
          this.textOutput = this.titleCase(this.textInput);
          break;
        case 'sentenceCase':
          this.textOutput = this.sentenceCase(this.textInput);
          break;
        case 'upperCase':
          this.textOutput = this.upperCase(this.textInput);
          break;
        case 'lowerCase':
          this.textOutput = this.lowerCase(this.textInput);
          break;
        case 'removeVowels':
          this.textOutput = this.removeVowels(this.textInput);
          break;
        case 'removeConsonants':
          this.textOutput = this.removeConsonants(this.textInput);
          break;
        case 'studlyCaps':
          this.textOutput = this.studlyCaps(this.textInput);
          break;
        case 'camelCase':
          this.textOutput = this.camelCase(this.textInput);
          break;
        case 'underscoredText':
          this.textOutput = this.underscoredText(this.textInput);
          break;
        case 'removeDuplicateSpace':
          this.textOutput = this.removeDuplicateSpace(this.textInput);
          break;
        case 'reverseText':
          this.textOutput = this.reverseText(this.textInput);
          break;
        case 'backwardText':
          this.textOutput = this.backwardText(this.textInput);
          break;
        case 'scrambleText':
          this.textOutput = this.scrambleText(this.textInput);
          break;
        case 'encodeURL':
          this.textOutput = this.encodeURL(this.textInput);
          break;
        case 'decodeURL':
          this.textOutput = this.decodeURL(this.textInput);
          break;
        case 'rot13':
          this.textOutput = this.rot13(this.textInput);
          break;
      }
    },
    titleCase: function (str) {
      str = str.toLowerCase().split(' ');
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }
      return str.join(' ');
    },
    sentenceCase: function (str) {
      str = str.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
        return c.toUpperCase();
      });
      return str;
    },
    upperCase: function (str) {
      str = str.toUpperCase();
      return str;
    },
    lowerCase: function (str) {
      str = str.toLowerCase();
      return str;
    },
    removeVowels: function (str) {
      return str.replace(/[aeiou]/gi, '');
    },
    removeConsonants: function (str) {
      return str.replace(/[BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz]/gi, '');
    },
    studlyCaps: function (str) {
      return str.split('').map( function(c) {
        transform = Math.random() >= 0.5 ? 'toUpperCase' : 'toLowerCase';
        return c[transform]();
      }).join('');
    },
    camelCase: function (str) {
      return str.replace(/^([A-Z])|[\s-_]+(\w)/g, function (match, p1, p2, offset) {
        if (p2) return p2.toUpperCase();
        return p1.toLowerCase();
      });
    },
    underscoredText: function (str) {
      return str.split(' ').join('_');
    },
    removeDuplicateSpace: function (str) {
      return str.replace(/\s+/g, " ");
    },
    backwardText: function (str) {
      return str.split('').reverse().join("");
    },
    reverseText: function (str) {
      return str.split(/\s/).reverse().join(" ");
    },
    scrambleText: function (str) {
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
    },
    encodeURL: function (str) {
      return encodeURIComponent(str).replace(/'/g, "%27").replace(/"/g, "%22");
    },
    decodeURL: function (str) {
      return decodeURIComponent(str.replace(/\+/g, " "));
    },
    rot: function( t, u, v ) {
      return String.fromCharCode( ( ( t - u + v ) % ( v * 2 ) ) + u );
    },
    rot13: function (s) {
      var b = [],
        c, i = s.length,
        a = 'a'.charCodeAt(),
        z = a + 26,
        A = 'A'.charCodeAt(),
        Z = A + 26;
      while (i--) {
        c = s.charCodeAt(i);
        if (c >= a && c < z) {
          b[i] = this.rot(c, a, 13);
        } else if (c >= A && c < Z) {
          b[i] = this.rot(c, A, 13);
        } else {
          b[i] = s.charAt(i);
        }
      }
      return b.join('');
    }
  }
});