function generatePDF() {  
  var printContents = document.getElementById('imprimir').innerHTML;
  var originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;  
  document.title = 'GilbertoShimokawaFalcaoCurriculumAnalistaSistemas_' + formatDate();  
  window.print();      
  document.body.innerHTML = originalContents;
}

function formatDate() {
  var d = new Date(),
      month = d.getMonth() + 1,
      day = d.getDate(),
      year = d.getFullYear();  

  let monthString = month.length == 1 ? month.toString(): '0' + month.toString(); 
  let dayString = day.length == 1 ? day.toString(): '0' + day.toString();

  return [year.toString() + monthString + dayString];
}