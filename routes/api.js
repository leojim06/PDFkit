const express = require('express');
const PDFDocument = require('pdfkit');

const router = express.Router();
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl.'

router.get('/', (req, res) => {
  const doc = new PDFDocument;
  doc.pipe(res.status(200));
  doc.info.Title = 'Test PDF';
  doc.info.Author = 'leojim06';
  doc.info.Subject = 'Tutorial of PDF creation with PDFkit';
  doc.fontSize(16).text('Hello my new PDF', {
    width: 470,
    align: 'center'
  });
  doc.moveDown();
  doc.fontSize(12)
    .fillColor('green')
    .text(lorem, {
      width: 470,
      height: 280,
      align: 'justify',
      columns: 2,
      columnGap: 18
    });
  doc.addPage();
  doc.moveTo(0, 50)
    .lineTo(100, 190)
    .quadraticCurveTo(130, 200, 150, 120)
    .bezierCurveTo(190, -40, 200, 200, 300, 150)
    .lineTo(400, 130)
    .stroke();
  doc.strokeColor('red').path('M 0,20 L 100,160 Q 130,200 150,120 C 190,-40 200,200 300,150 L 400,90')
    .stroke()
  doc.addPage();
  doc.fontSize(16).text('Para más información visite la página del autor de PDFkit', {
    width: 470,
    align: 'right'
  });
  doc.moveDown();
  doc.fontSize(14)
    .fillColor('blue')
    .text('PDFkit.org', {
      width: 470,
      align: 'justify',
      link: 'http://pdfkit.org/',
      underline: true
    })
  doc.end();
});

module.exports = router;
