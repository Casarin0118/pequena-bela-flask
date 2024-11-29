// Função para enviar formulário de contato (com validação simples)
function enviarContato() {
  const nome = document.querySelector('input[name="nome"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const assunto = document.querySelector('input[name="assunto"]').value;
  const mensagem = document.querySelector('textarea[name="mensagem"]').value;

  if (nome && email && assunto && mensagem) {
    alert('Mensagem enviada com sucesso!');
  } else {
    alert('Por favor, preencha todos os campos.');
  }
}
