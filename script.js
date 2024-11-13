$(document).ready(function() {
    // Função para adicionar a tarefa à lista
    $("form").submit(function(event) {
        event.preventDefault(); // Impede o envio do formulário

        var tarefa = $("input[type='text']").val(); // Pega o valor do input

        // Verifica se o input não está vazio
        if (tarefa.trim() !== "") {
            // Cria um item da lista
            var listItem = $("<li>").text(tarefa);

            // Adiciona o item à lista
            $("ul").append(listItem);

            // Limpa o campo de input
            $("input[type='text']").val("");
        }
    });

    // Evento de clique nos itens da lista
    $("ul").on("click", "li", function() {
        $(this).toggleClass("completed"); // Adiciona ou remove a classe 'completed'
    });
});
