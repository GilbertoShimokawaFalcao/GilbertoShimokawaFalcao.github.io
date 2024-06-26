function generatePDF() {    
  let local = 'GilbertoShimokawaFalcaoCurriculumAnalistaSistemas_' + formatDate();
  
  //Ocultar botões.
  document.getElementById('Download').style.display = "none";
  document.getElementById('return').style.display = "none";

  var printContents = document.getElementById('imprimir').innerHTML;
  var originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;       
  document.title = local;
  window.print();
  document.body.innerHTML = originalContents;

  //Exibir botões.
  document.getElementById('Download').style.display = "block";
  document.getElementById('return').style.display = "block";
}

function formatDate() {    
      var d = new Date();
      month = d.getMonth() + 1;
      day = d.getDate();
      year = d.getFullYear();

      let monthString = '';
      month.toString().length == 1 ? monthString = '0' + month.toString() :  month.toString();    
      let dayString = day.toString().length == 1 ? '0' + day.toString() : day.toString();
    return [year.toString() + monthString.toString() + dayString.toString()].toString();
}