var buttonAdd = document.querySelector("#add-todo");

buttonAdd.addEventListener("click", function(event) {
    //Pegando o elemento dentro da lista ul
    let lista = document.querySelector("#todo-list");

    //Pegando o valor digitado no imput
    let todo = document.querySelector("#new-todo");
    //Console.log(todo);
    //console.log(todo.value);

    //criando licom nova todo
    var newLi = document.createElement("li");
    //console.log(newLi);

    var addI = document.createElement("i")
    addI.className = "fa fa-thumbtack"

    //Adicionando o valor digitado no imput dentro da newLi
    newLi.textContent = todo.value;
    newLi.appendChild(addI)
    //console.log(newLi)

    //* Adicionando newLi dentro da ul*/
    lista.appendChild(newLi);
})
