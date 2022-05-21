// function generatePDF() {
//     var doc = new jsPDF();  //create jsPDF object
//      doc.fromHTML(document.getElementById("body"), // page element which you want to print as PDF
//      15,
//      15, 
//      {
//        'width': 170  //set width
//      },
//      function(a) 
//       {
//        doc.save("GilbertoShimokawaFalcaoCurriculumFullStack.pdf"); // save file name as HTML2PDF.pdf
//      });
// }


function generatePDF() {
    var doc = new jsPDF();          
    var elementHandler = {
      '#ignorePDF': function (element, renderer) {
        return true;
      }
    };
    var source = window.document.getElementsByTagName("body")[0];
    doc.fromHTML(
        source,
        15,
        15,
        {
          'width': 180,'elementHandlers': elementHandler
        });
    
    doc.output("dataurlnewwindow");
}
