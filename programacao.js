/*INÍCIO DO JOGO, BARRA DE ESPAÇO FAZ O MARIO PULAR*/
document.addEventListener("keypress" , function(pull){
    if(pull.keyCode == 32){

        let player = document.querySelector('.player')
        player.classList.remove('player_jump')

        setTimeout(()=> player.classList.add
        
        ('player_jump') , 50)//setTimeout

        setTimeout(()=>{
          let alto = new Audio('sons/cartoon-jump-6462.mp3')
          alto.volume = 0.4
          alto.play()
        },100)
    } //condicional

}) //addEvent.

//VALIDAR SE O JOGO FOI PERDIDO

const pipe = document.querySelector(".cano");
const character = document.querySelector(".player");

function lose(){

//Distância do cano entre o canto esquerdo da div 
const positionx = pipe.offsetLeft
//Medida do pulo do Mario
const positiony = +window.getComputedStyle(character).bottom.replace('px' , '')
  
if(positionx <= 90 && positionx > 0 && positiony <=10){

  //A primeira perda 
        pipe.classList.remove('cano')
        pipe.style.display = 'none'
          
        character.style.animationPlayState = 'paused'
        character.style.bottom = `${positiony}px`
        character.src = 'imagens/Mario_Death.png'
        character.style.width = '70px'
        character.style.height = '70px'

        //Remove as estrelas
        let stars = document.querySelectorAll('.chances')[0]
        stars.parentNode.removeChild(stars) 

      /*
      Tocar som quando perder uma estrela
      Só toca quando o mario pula o cano pela primeira vez.  */
        setTimeout(()=>{
          let bye_star = new Audio('sons/interface-124464.mp3')
          bye_star.volume = 0.5
          bye_star.play()
        },100)

      let last = setTimeout(()=>{
          character.src = 'imagens/andando.gif'
          character.style.width = '120px'
          character.style.height = '125px'
          character.style.margin = '0px'
          character.style.animationPlayState = 'running'

          pipe.style.display = 'block'

          function pipeMove(){
            pipe.classList.add('cano')
            pipe.style.display = 'block'

      }//função

      //O cano vai rodar mais uma vez com uma estrelinha só
      for(let count = 1; count < 2; count++){
        pipeMove()
      }//for

      //Se as estrelas não existirem mais é game over. A segunda perda. E os pontos somem

      let stars = document.querySelector('.chances')
      if(stars == null){
        //Limpa o tempo do set que dá para continuar jogando
      clearTimeout(last)
        character.style.bottom = `${positiony}px`
        character.src = 'imagens/Mario_Death.png'
        character.style.width = '70px'
        character.style.height = '70px'
        pipe.style.animationPlayState = 'paused'

        let pontos = document.getElementById("numeros")
        pontos.innerText = ''
        

        let placar = document.querySelector("#pontos")
        placar.style.display = 'none'

        //Mensagem para reiniciar o jogo

        let game_over = document.getElementById("mensagem")
        game_over.style.display = 'block'
        game_over.style.animationPlayState = 'running'

        let sound = new Audio('sons/fail-144746.mp3')
        sound.play()

        }//condicional interna

      },500)//setTimoeout
     
} //condicional 

else{

  /*Pausa do jogo enquanto não perder
  let pause = document.querySelector("pausa")
  pause.addEventListener("onclik" , function(){
    if(botão clicado){
      pipe.style.animationPlayState = 'paused'
      pausar as nuvens também
    }
    
  })*/


  //Aqui vai contar os pontos
  
    if(positionx <= 90 && positionx > 0 && positiony > 10){

      function score (){

        var pontos = document.getElementById("numeros")
        setTimeout(()=>{
          
          pontos.innerText = Number(pontos.innerText) + 1


          if(pontos.innerText == 10){

             pipe.style.animationPlayState = 'paused'
             pipe.style.display = 'none'

             //Animação para o jogo vencido

             character.classList.remove('player_jump')
             character.classList.add('run')
             setTimeout(()=>{
              character.style.left = '35%'
             },100)

             let peach = document.createElement('img')
             peach.id = 'p'
             peach.style.width = '80px'
             peach.style.height = '100px'
             peach.src = 'imagens/peach-unscreen.gif'
             peach.style.animationName = 'run'

             let scene = document.getElementById("cenario")
             scene.appendChild(peach)

            let sound = new Audio('sons/success-1-6297.mp3')
            sound.volume = 1
            sound.play()

            let core = document.querySelector('.heart')
            core.style.display = 'block'

            setTimeout(()=>{
              
            let sound = new Audio('sons/fart_echo-94308.mp3')
            sound.volume = 1
            sound.play()
              
            },5000)

          }//condicional interna
        
        },500)
  
        //Enquanto o mario estar no ar fica somando + 2

      }//função

       score()
 
      }//condicional interna
     
  }////else

}//função

setInterval(lose,100)//setInterval
