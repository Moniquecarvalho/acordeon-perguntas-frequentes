const itemsPerguntasERespostas = document.querySelectorAll(".item");

itemsPerguntasERespostas.forEach(function(item){
   item.addEventListener("click", function(){
      const itemAtivoAtual = document.querySelector(".ativo");

      if (itemAtivoAtual){
         itemAtivoAtual.classList.remove("ativo");
      }

      item.classList.add("ativo");
   });
});