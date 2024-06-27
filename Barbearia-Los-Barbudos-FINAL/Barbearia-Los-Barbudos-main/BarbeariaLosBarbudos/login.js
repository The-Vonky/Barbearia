const container = document.getElementById('container');
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', function(){
    alert("Cadastro efetuado com sucesso!");
})

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});