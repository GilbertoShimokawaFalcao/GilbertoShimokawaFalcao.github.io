function generatePDF() {
  var printContents = document.getElementById('Pagina').innerHTML;
  var originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}