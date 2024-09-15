const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const date = document.getElementById('date').value;
    const number = document.getElementById('number').value;
    const option = document.querySelector('input[name="option"]:checked').value;
    const interests = [];
    const checkboxes = document.querySelectorAll('input[name="interest"]');
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            interests.push(checkbox.value);
        }
    });
    const select = document.getElementById('select').value;

    // Validação de dados
    if (!name || !message || !date || !number || !option || !interests.length || !select) {
        alert('Preencha todos os campos obrigatórios!');
        return;
    }

    // Enviar formulário (não implementado)
    console.log('Formulário enviado!');
});