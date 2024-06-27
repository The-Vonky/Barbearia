

function selecionar_barbeiro(){
    document.getElementById('selecione_barbeiro').innerText = 'barbeiro escolhido';
}
function selecionar_data(){
    document.getElementById('selecione_data').innerText = 'data escolhido';
}
function selecionar_corte(){
    document.getElementById('selecione_corte').innerText = 'serviço escolhido';
}

const agendar = document.getElementById('agendar');
agendar,addEventListener('dblclick',function(){
    this.alert("Agendamento efetuado com sucesso!!");
})
