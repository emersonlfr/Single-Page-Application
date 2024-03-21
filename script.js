/*JavaScript:
Validar o formulário para que todos os campos sejam preenchidos.
Adicionar uma máscara no campo “Valor” para que apenas números sejam preenchidos e com a formatação correta. (Padrão: 10,90)
Ao adicionar uma nova transação, persistir no Local Storage e já atualizar a lista com o extrato. Atualizar também o cálculo apresentado.
Ao clicar no link “Limpar dados”, apresentar uma mensagem de confirmação e em seguida apagar as informações, atualizando a lista.*/
document.getElementById("open_bar").addEventListener("click", function(){
    document.getElementById("sidebar").classList.toggle("open-sidebar");
})