function adicionarTarefa() {
    const adicionar = $('#nome-tarefa').val();
    const adicionarTarefa = $('<li>').text(adicionar);

    if(adicionar!==''){
        $('#lista-tarefas').append(adicionarTarefa);
        $('#lista-tarefas').css('display', 'block');
        $('#nome-tarefa').val('');
    }
}

$(document).ready(function() {
    const itemLista = $('#lista-tarefas li');

    if (itemLista) {
        $('#lista-tarefas li').html(itemLista);
    }

    $('#lista-tarefas').on('click', 'li', function(){
        $(this).toggleClass('completed');

        localStorage.setItem('tarefa', $('#lista-tarefas').html());
    });

    $('form').on('submit', function(e){
        e.preventDefault();

        adicionarTarefa();
    });
});