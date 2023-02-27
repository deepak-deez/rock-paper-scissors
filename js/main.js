choice=document.querySelectorAll('.choice');
board1=document.querySelector('.board1');
board2=document.querySelector('.board2');
scoreBoard=document.querySelector('.score-board');
scoreCount=document.querySelector('.score-count');
let playerVal;
let rock = '/images/rock.png';
let paper= '/images/paper.png';
let scissors= '/images/scissors.png';

arrayURl = [rock, paper, scissors]
let playerCtr=0;
let compCtr=0;
let tie=0

choice.forEach(element => {
    element.onclick =() =>{ 
      playerVal=element.value;
      board1.classList.toggle('rotate-animation')
      board2.classList.toggle('rotate-animation')
        // board1.innerHTML=val;
        compRandom();
        board1.innerHTML=`<img src ="${arrayURl[playerVal]}">`;
        board2.innerHTML=`<img src ="${arrayURl[compVal]}">`;
        scoreBoard.innerHTML=calcWinner(playerVal,compVal);
        scoreCount.innerHTML=`You: ${playerCtr} Comp: ${compCtr} Tied:${tie}`
    }
});


function compRandom(){
    compVal= Math.floor(Math.random()*3);

    return compVal;
}

function calcWinner(playerVal, compVal){
    if(playerVal==compVal){
        tie++;
        return "it's a tie!";
       
    }
    // else if(playerVal>compVal && compVal!=0)
    // {
    //    playerCtr++;
    //     return "You Win!";

    // }
    else if(compVal==0 && playerVal==2){
        compCtr++;
        return "comp wins!";
    }
    else if(playerVal==0 && compVal==2){
        playerCtr++;
        return "You Win!";
    }
    else{
    if(playerVal>compVal){
        playerCtr++;
        return "You win!";
    }
    else{
        compCtr++;
        return "Comp wins!";
    }}
}