function generatePDF() {
  var printContents = document.getElementById('Pagina').innerHTML;
  var originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  document.title = 'GilbertoShimokawaFalcaoCurriculumAnalistaSistemas_' + formatDate();
  document
  window.print();
  document.body.innerHTML = originalContents;
}

function formatDate() {
  var d = new Date(),
      month = (d.getMonth() + 1),
      day = d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year.toString() + month.toString() + day.toString()];
}