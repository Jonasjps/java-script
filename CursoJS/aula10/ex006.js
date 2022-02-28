<script>
var a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
   a.innerText = 'Clicar!'
   a.style.background='red'
}
function entrar() {
   a.innerText= 'Entrou!'
}
function sair() {
   a.innerText= 'Sair!'
   a.style.background='green'
}
</script>