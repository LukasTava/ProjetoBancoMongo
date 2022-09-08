let titulo = document.getElementById("titulo");
let autor = document.getElementById("autor");
let editora = document.getElementById("editora");
let ISBN = document.getElementById("ISBN");
let lido = document.getElementById('lido');


function Cadastrar() { 
    
    if(titulo.value != "" && autor.value != "" && editora.value != "" && ISBN.value != "") {
        if(titulo.value == autor.value && editora.value == ISBN.value == lido.value) {

            const obj = {
                titulo: titulo.value,
                autor: autor.value,
                editora: editora.value,
                ISBN: ISBN.value,
                lido: lido.value
            };
            fetch("http://localhost:3000/addLivro",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
            });       

            alert("Inserido com sucesso");
            
        }
    }
    else {
        alert("Preencha todos campos");
    }    
}
