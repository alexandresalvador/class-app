
/*let alunos = [
  {id = 1,  nome = "Maria",  lista = 5, trabalho = 5,  prova = 10},
  {id = 2, nome = "Ana", lista = 2, trabalho = 1, prova = 8},
  {id = 3, nome = "Carlos", lista = 1, trabalho = 1, prova = 4},
  {id = 4, nome = "Pedro", lista = 3, trabalho = 1, prova = 6},
]

alunos;


for(i = 0; i < alunos.length; i++) {
    let sum = 0;
    let media = 0;
   console.log(alunos[i])
}*/



var rIndex,
    table = document.getElementById("table");

function checkEmptyInput() {
    var isEmpty = false,
        nome = document.getElementById("nome").value,
        lista = document.getElementById("lista").value,
        trabalho = document.getElementById("trabalho").value;
    prova = document.getElementById("prova").value;

}

function addHtmlTableRow() {

    if (!checkEmptyInput()) {
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            cell5 = newRow.insertCell(4),
            cell6 = newRow.insertCell(5),
            cell7 = newRow.insertCell(6),
            nome = document.getElementById("nome").value,
            lista = document.getElementById("lista").value,
            trabalho = document.getElementById("trabalho").value,
            prova = document.getElementById("prova").value,
            soma = lista.value + trabalho.value + prova.value,
            media = lista.value + trabalho.value + prova.value / 3;

        cell1.innerHTML = "#";
        cell2.innerHTML = nome;
        cell3.innerHTML = lista;
        cell4.innerHTML = trabalho;
        cell5.innerHTML = prova;
        cell6.innerHTML = soma;
        cell7.innerHTML = media;
        selectedRowToInput();
    }
}

function selectedRowToInput() {

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            document.getElementById("").value = this.cells[0].innerHTML;
            document.getElementById("nome").value = this.cells[1].innerHTML;
            document.getElementById("lista").value = this.cells[2].innerHTML;
            document.getElementById("trabalho").value = this.cells[3].innerHTML;
            document.getElementById("prova").value = this.cells[4].innerHTML;
            document.getElementById("soma").value = this.cells[5].innerHTML;
            document.getElementById("media").value = this.cells[6].innerHTML;
        };
    }
}
selectedRowToInput();

function funcaocancelar() {
    alert("Nao foi possivel inserir esse aluno(a)");
    document.getElementById("nome").value = "";
    document.getElementById("lista").value = "";
    document.getElementById("trabalho").value = "";
    document.getElementById("prova").value = "";
}

function removelinha() {
    table.deleteRow(rIndex);
    document.getElementById("nome").value = "";
    document.getElementById("lista").value = "";
    document.getElementById("trabalho").value = "";
    document.getElementById("prova").value = "";
    alert("O aluno(a) foi removido do sistema com sucesso.");
}
















