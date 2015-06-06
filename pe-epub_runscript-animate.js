var Peepub   = require('pe-epub-fs')(require('pe-epub'));
var epubJson = require('/Users/galbers/GitHub/animate-epub/animate.json'); // see examples/example.json for the specs
var myPeepub = new Peepub(epubJson);

myPeepub.create('/Users/galbers/GitHub/animate-epub/animate.epub')
    .then(function(filePath){
        console.log(filePath); // the same path to your epub file!
    });