// Inicializando o EmailJS com o seu User ID
(function() {
    emailjs.init("service_r2pqxzg"); // Substitua pelo seu User ID
})();

// Função para enviar o formulário
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coletar os dados do formulário
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Enviar o e-mail via EmailJS
    emailjs.send("service_r2pqxzg", "template_ok2nkd5", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        console.log('Mensagem enviada com sucesso!', response);
        // Exibir mensagem de sucesso
        document.getElementById('successMessage').style.display = 'block';
    }, function(error) {
        console.log('Falha no envio', error);
    });
});