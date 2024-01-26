let playGame=confirm("shall we play a game");
if(playGame){
   
   while(playGame){
    const playerOne=prompt("enter rock,paper or scissors");
       if(playerOne||playerOne===""){
           const playerChoice=playerOne.trim().toLowerCase();
                  if(
                    playerChoice==="rock"||
                    playerChoice==="paper"||
                    playerChoice==="scissors"
                    ){
                        
                      const computer=Math.floor(Math.random()*3);
                      const array=["rock","paper","scissors"];
                      const computerChoice=array[computer];
                    
                     const game=playerChoice === computerChoice?"game tie"
                      : playerChoice==="rock"&&computerChoice==="paper"
                      ?`playerChoice:  ${playerChoice}\ncomputerChoice: ${computerChoice}\ncomputer wins!`
                      : playerChoice === "paper" && computerChoice==="scissors"
                      ?`playerChoice:  ${playerChoice}\ncomputerChoice: ${computerChoice}\ncomputer win!`
                      : playerChoice==="scissors"&&computerChoice==="rock"
                       ?`playerChoice: ${playerChoice}\ncomputerChoice:${computerChoice}\ncomputerChoice wins!`
                       :`playerChoice:  ${playerChoice} \ncomputerChoice: ${computerChoice}\nplayer wins;`
                        alert(game);
                        play=confirm("Play again");
                        if(play)alert("ok thanks for playing");
                        continue;
                         } 
                   else{
                        alert("you did not enter rock, paper and scissors");
                      continue;
                     }
             }
         else{
           alert("you changed your mind");
           }  
    }
}
else{
    alert("play next time");
}
