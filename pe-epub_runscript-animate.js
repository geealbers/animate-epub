var Peepub   = require('pe-epub-fs')(require('pe-epub'));
var epubJson = require('/Users/gregalbers/GitHub/EBOOKS/animate-epub/animate.json'); // see examples/example.json for the specs
var myPeepub = new Peepub(epubJson);

myPeepub.create('/Users/gregalbers/animate.epub')
    .then(function(filePath){
        console.log(filePath); // the same path to your epub file!
    });