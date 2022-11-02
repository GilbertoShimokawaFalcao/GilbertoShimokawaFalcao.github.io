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
      month = (d.getMonth() + 1),
      day = d.getDate(),
      year = d.getFullYear();

  if (month.length == 1) month = '0' + month;
  if (day.length == 1) day = '0' + day;

  return [year.toString() + month.toString() + day.toString()];
}