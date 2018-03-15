let fs = require('fs'),
    PDFParser = require("pdf2json");

let pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFile("./json/1.json", JSON.stringify(pdfData), (error) => {
        console.log(error);
    });
    // console.log(pdfData.formImage.Pages);
});

pdfParser.loadPDF("./pdf/printTicket.pdf");