let contador = 0;
let input = document.getElementById('inputTarefas');
let btnAdd = document.getElementById('btnadd');
let main = document.getElementById('areaLista')

function addTarefas () {
    //VALOR DIGITADO NO INPUT
    let valorInput = input.value;
    
    //SE NAO FOR VAZIO NEM NULO
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        
        ++contador;
        
        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <img src="./img/gravando.svg" alt="">
        </div>
        <div class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><img src="img/circulo-cruzado.svg">Deletar</button>
        </div>
        </div>`;

        //ADICIONAR NOVO ITEM NO MAIN
        main.innerHTML += novoItem;

        //ZERAR OS CAMPINHOS
        input.value = "";
        input.focus();


    }
}
function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove(); 
}

input.addEventListener("keyup", function(event){
    if (event.keycode === 13) {
        event.preventDefault();
       btnAdd.click(); 
    }
}) 