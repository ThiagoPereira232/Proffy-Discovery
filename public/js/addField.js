// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão 
.addEventListener('click', cloneField)

// execultar uma acao
function cloneField() {
    console.log("Cheguei aqui")
    // duplicar os . Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true ou false

    // pegar os campos. que campos??
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada camo limpar
    fields.forEach(function(field) {
        // pegar o field do momento e limpa 
        field.value = ""
    })

    // colocar na pagina: onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    