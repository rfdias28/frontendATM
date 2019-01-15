

function getConsultasPage(id) {
    $('link[title="myscript"]').attr('src', 'js/consultas/main.js');
    $('link[title="mystyle"]').attr('href', 'css/paginas/main.css');

  return `<div >
  <div class="container">
  <h2>Consultas</h2>
  <div id="accordionExample" class="container accordion"> 
    <br>
    
    
  </div>
  </div>
</div>

`}