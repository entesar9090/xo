let turn='x';
let gameOver = false;

let title= document.querySelector(".title");
 let sqr =[];
function game(id){
    if (gameOver) return;

    let element= document.getElementById(id);
    if(turn =='x' && element.innerHTML ==""){
       element.innerHTML="x";
       turn='o';
       title.innerHTML="o";
       title.style.fontSize="40px";
    }
    else if ( turn =='o' && element.innerHTML =="")
    {
        element.innerHTML="o";
        turn='x';
        title.innerHTML="x";
    } 
    winner();

}
function winner(){
    for(let i=1; i<=9; i++){
        sqr[i] =document.getElementById('item'+i).innerHTML;
    }

    if(sqr[1] == sqr[2]&& sqr[2]== sqr[3] && sqr[1] !=""){
        end(1,2,3);
    } else if(sqr[4] == sqr[5] && sqr[5] == sqr[6] && sqr[4] != ""){
        end(4,5,6);
    }
    else if (sqr[7] == sqr[8] && sqr[8] == sqr[9] && sqr[7] != ""){
        end(7,8,9);
    }
    else if(sqr[1] == sqr[4] && sqr[4] == sqr[7] && sqr[1]!= ""){
        end(1,4,7)
    }
    else if(sqr[2] == sqr[5] && sqr[2] == sqr[8] && sqr[2] != ""){
        end(2,5,8)
    } 
    else if(sqr[3]== sqr[6] && sqr [6] == sqr[9]&& sqr [3]!= ""){
        end(3,6,9)
    }
     else if(sqr[1] == sqr[5] && sqr[5] == sqr[9] && sqr[1] != "" ){
        end(1,5,9)
    }
    else if (sqr[3] == sqr[5] && sqr[3] == sqr[7] && sqr[3]!= ""){
        end(3,5,7)
    }
}

function end(a,b,c){
    gameOver = true;
    title.innerHTML='Player ' + sqr[a] + ' wins!';
    let t1=document.getElementById('item'+a);
    t1.style.backgroundColor='black';
    let t2=document.getElementById('item'+b);
    t2.style.backgroundColor ="black";
    let t3=document.getElementById('item'+c);
    t3.style.backgroundColor ="black";
  setInterval (function(){
    title.innerHTML += "." },1000);
    
 setTimeout(function(){
    location.reload();
  }, 2000);
  
  }
