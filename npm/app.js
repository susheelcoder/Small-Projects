const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();

// file output
doc.pipe(fs.createWriteStream('test.pdf'));

// ✅ custom font load
doc.font('Helvetica')

// content
doc.fontSize(20).text('Hello  This is my first PDF in Node.js!', {
  align: 'center'
});

doc.moveDown();
doc.fontSize(14).text('Made using PDFKit module ');

doc.moveDown();
doc.text('Name: susheel kumar');
doc.text('Project: PDF Generator Test');

doc.end();

console.log('PDF created successfully!');