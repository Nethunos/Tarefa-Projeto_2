const form = document.getElementById('formulario');
let linhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const inputNome = document.getElementById('input-nome')
    const inputTelefone = document.getElementById('input-tell');

    let linha = '<tr>';
    linha += `<td> ${inputNome.value}</td>`;
    linha += `<td> ${inputTelefone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    alert(`O contato de ${inputNome.value}, com o número ${inputTelefone.value} foi adicionado a lista.`);
})  