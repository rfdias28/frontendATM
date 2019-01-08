function getalterapinPage() {
    $('link[title="myscript"]').attr('href', 'js/alterapin/main.js');
    $('link[title="mystyle"]').attr('href', 'css/paginas/main.css');

  return `<div >
            <div class="container">
                <h2>Depósitos</h2>
                 <div id="accordionExample" class="container accordion"> 
                <br>
    
    
                 </div>
             </div>
        </div>`
    }
