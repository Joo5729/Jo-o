console.log("Meu primeiro site está funcionando!");

// Interatividade simples
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('h1');
    const botao = document.getElementById('btnMostrar');
    const conteudo = document.getElementById('conteudoExtra');

    header.addEventListener('click', function() {
        alert('Bem-vindo ao meu site!');
    });

    botao.addEventListener('click', function() {
        if (conteudo.style.display === 'none') {
            conteudo.style.display = 'block';
            botao.textContent = 'Ocultar informações';
        } else {
            conteudo.style.display = 'none';
            botao.textContent = 'Ver mais sobre mim';
        }
    });
});
