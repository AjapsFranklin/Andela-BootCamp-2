(function() {

    var myApp = require('../app/library.js');
    //var myApp = require('../app/library.js');


describe("words()", function() {
  it("invalid input", function() {
    expect(myApp.words(123)).toEqual("invalid input");
  });

  it("counts one word", function() {
    var expectedCounts = JSON.stringify({ word: 1 });
    expect(myApp.words("word")).toEqual(expectedCounts);
  });

  it("counts one of each", function() {
    var expectedCounts = JSON.stringify({ one: 1, of: 1, each: 1 });
    expect(myApp.words("one of each")).toEqual(expectedCounts);
  });

  it("counts multiple occurrences", function() {
    var expectedCounts = JSON.stringify({ one: 1, fish: 4, two: 1, red: 1, blue: 1 });
    expect(myApp.words("one fish two fish red fish blue fish")).toEqual(expectedCounts);
  });

  it("includes punctuation", function() {
    var expectedCounts = JSON.stringify({ car: 1, ":": 2, carpet: 1, as: 1, java: 1, "javascript!!&@$%^&": 1 });
    expect(myApp.words("car : carpet as java : javascript!!&@$%^&")).toEqual(expectedCounts);
  });

  it("includes numbers", function() {
    var expectedCounts = JSON.stringify({ testing: 2, 1: 1, 2: 1 });
    expect(myApp.words("testing 1 2 testing")).toEqual(expectedCounts);
  });

  it("respects case", function() {
    var expectedCounts = JSON.stringify({ go: 1, Go:1, GO:1 });
    expect(myApp.words("go Go GO")).toEqual(expectedCounts);
  });

  it("counts properly international characters", function() {
    var expectedCounts = JSON.stringify({ "¡Hola!": 1, "¿Qué": 1, "tal?": 1, "Привет!": 1 });
    expect(myApp.words("¡Hola! ¿Qué tal? Привет!")).toEqual(expectedCounts);
  });

  it("counts multiline", function() {
    var expectedCounts = JSON.stringify({ hello: 1, world: 1 });
    expect(myApp.words("hello\nworld")).toEqual(expectedCounts);
  });

  it("counts tabs", function() {
    var expectedCounts = JSON.stringify({ hello: 1, world: 1 });
    expect(myApp.words("hello\tworld")).toEqual(expectedCounts);
  });

  it("return null for empty word", function() {
    var expectedCounts = JSON.stringify({ });
    expect(myApp.words("   ")).toEqual(expectedCounts);
  });

  it("counts multiple spaces as one", function() {
    var expectedCounts = JSON.stringify({ hello: 1, world: 1 });
    expect(myApp.words("hello  world")).toEqual(expectedCounts);
  });

  it("handles properties that exist on Object's prototype", function() {
    var expectedCounts = JSON.stringify({ reserved: 1, words : 1, like :1,  prototype: 1, and : 1, toString: 1,  "ok?": 1});
    expect(myApp.words("reserved words like prototype and toString ok?")).toEqual(expectedCounts);
  });
});


//TEST SUITES FOR REVERSE STRING 

describe("Produce the reverse order of a word: ", function() {
  describe("Case for en empty string", function() {

    it("should return null for empty string", function() {
      expect(myApp.reverseString('')).toEqual(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for `anna`", function() {
      expect(myApp.reverseString('anna')).toEqual(true);
    });

    it("should return true for `NaN`", function() {
      expect(myApp.reverseString('NaN')).toEqual(true);
    });

    it("should return true for `civic`", function() {
      expect(myApp.reverseString('civic')).toEqual(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return `skoob` for `books`", function() {
      expect(myApp.reverseString('books')).toEqual('skoob');
    });

    it("should return `nomolos` for `solomon`", function() {
      expect(myApp.reverseString('solomon')).toEqual('nomolos');
    });

    it("should return `csim` for `misc`", function() {
      expect(myApp.reverseString('misc')).toEqual('csim');
    });


    it("should return null for  multiple spaces`     `", function() {
      expect(myApp.reverseString('    ')).toEqual(null);
    });

    it("should return 'invalid input' for  123 - non String", function() {
      expect(myApp.reverseString(123)).toEqual("invalid input");
    });

     it("should return 'invalid input' for  an 'Array' - non String", function() {
      expect(myApp.reverseString(["Frank","Tunde"])).toEqual("invalid input");
    });
  });
  });
})();