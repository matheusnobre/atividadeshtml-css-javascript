var lista = document.querySelector("#list");
    //console.log(lista);

function addItem() {
    /**Pegando valores digitados ns imputs */
    var item = document.querySelector("#new-item").value;
    //console.log(item)

    //valor de inpute valor (R$)
    var valor = document.querySelector("#value-item").value;
    //console.log(valor);

    /** Criando elemento tr */
    var tr = document.createElement("tr")
        //console.log(tr)

    /** Criando td item */
    var tdItem = document.createElement("td");

    /** Criando td valor */
    var tdValor = document.createElement("td");
    //console.log(tdItem);
    //console.log(tdValor);

    /** Adicionando id na td */
    tdValue.id = "valor";
    //console.log(tdValue);
    
    /** Adicionando texto na td Item */
    tdItem.textContent = item;
    //console.log(tdItem);

    /**Adicionando textoi na td de valor */
    tdValue.textContent = valor;
    //console.log(tdValue);

    /** Adicionando tdItem na tr */
    tr.appendChild(tdItem);
    /** Adicionando tdValue na tr */
    tr.appendChild(tdValue);
    //console.log(tr);

    /** Adicionando tr dentro da lista */
    lista.appendChild(tr);

    /** Adicionando função de somar itens */
    somaLista ();
}

function somaLista() {
    /** Pegando tds com valores dos itens */
    let tdValue = document.querySelector("#valor");
    //console.log(tdValue);

    var values = [];
    var valorTotal = 0;

    /** Estrutura condicional para verificar e setar valores do array */
    for (let index = 0; index < tdValue.lenghth; index++) {
        /**Setando texto td dentro do array values usando como referencia o index */
        values [index] = 
        parseFloat(tdValue[index.textContent]);

        valorTotal += 
        parseFloat(values[index]);
    }

    /** Pegando td de valor total */
    var tdValorTotal = document.querySelector("#soma");

    /** Adicionando soma de valores na td */
    tdValorTotal textContent = valorTotal;
    //console.log(values);
    //console.log(valorTotal);

}