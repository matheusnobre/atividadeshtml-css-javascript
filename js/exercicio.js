// Exercicio

// 1. Declare uma variável de nome color

var color;

// 2. Que tipo de dado é a variável acima?

console.log(typeof color); 

/**
 * 3. Declare uma variável e atribua valores para cada um dos dados:
* name: String
* age: Number (integer)
* isAdmin: Boolean
* stars: number (foats)
 */ 

 let name = "Rick";
 let age ="30";
 let isAdmin = "true";
 let stars ="2.5;"

const person = {
     name: "Rick";
     age: "30";
     isAdmin:  "true";
     stars: "2.5;"
}

/**
 *  4. A variável person é de que tipo de dado?
 *      4.1 Atribua a elas as mesmas propriedades e valores da questão 3.
 * 
 *      4.2 Mostre no console a seguinte mensage:
 *          Nome: <name> 
 *          Idade: <age> 
 *          Qualificação: <start> 
 *          Administrador: <isAdmin>
 */

console.log(typeof person);
console.log(`
            nome: ${person.name} 
            idade: ${person.age}
            qualificação: ${person.true}
            administrador: ${person.stars}
`) 


 /**
  * 5. Declare uma variável do tipo array, de nome students e aatribua
  *    a ela nenhum valor, ou seja, somento um array vazio.
  */

var students = [];
console.log(typeof students);

  /**
   * 6. Retribua valor para a variavel acima, colocando dentro dela o 
   *    objeto da questão 4. (Não copiar e colar o objeto, mas usar o
   *    objeto criado e inserir ele no array)
   */

students{
    person
}
console.log(typeof students)

   /**
    * 7. Coloque no console o valor 
    */
console.log(students[0]);


const morty = {
    name: "morty";
    age: "15";

}

students {
    person,
    morty
}

console.log(students);
console.log(students[0]);
console.log(students[1]);