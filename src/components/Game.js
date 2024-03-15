import React, {useState} from 'react';


function Game(){
    const [clickme, setClickMe] = useState(true);
    const myNodeArray = document.querySelectorAll('.box');

    const resetGame = () => {
       const myvalueAray=Array.from(myNodeArray);
       myvalueAray.forEach((elem) => {
          elem.innerText = '';
          elem.style.backgroundColor="white";
        });
        console.log(myvalueAray);
        console.log(myNodeArray);
      };
    
    const handleBox= (e) => {
        const clickBox = e.target;    //we get html element using e.target
        const boxId = clickBox.id;    //we get id of html element
        setClickMe(!clickme);
        if(clickBox.innerHTML===""){
            clickBox.innerHTML = clickme ? 'X' : '0';
            let mycolour =  clickme ? 'pink' : 'rgb(158, 98, 158)';
            clickBox.style.backgroundColor=mycolour;
        }
        else{
            setClickMe(!clickme);
            clickBox.innerHTML = clickme ? 'X' : '0';
            let mycolour =  clickme ? 'pink' : 'rgb(158, 98, 158)';
            clickBox.style.backgroundColor=mycolour;

            alert("You already clicked");
        }
        const k = Array.from(myNodeArray).map((elem) => elem.innerText);    //k is innerText array
        console.log(k);
        if((k[0]==='X' && k[1]==='X' && k[2]==='X') || (k[0]==='X' && k[3]==='X' && k[6]==='X')){
            alert("you won game");
        }
        else if((k[1]==='X' && k[4]==='X' && k[7]==='X') || (k[2]==='X' && k[5]==='X' && k[8]==='X')){
            alert("you won the game");
        }
        else if((k[0]==='X' && k[4]==='X' && k[8]==='X') || (k[2]==='X' && k[4]==='X' && k[6]==='X')){
            alert("you won the game");
        }
        else if((k[0]==='0' && k[1]==='0' && k[2]==='0') || (k[0]==='0' && k[3]==='0' && k[6]==='0')){
            alert("you won game");
        }
        else if((k[1]==='0' && k[4]==='0' && k[7]==='0') || (k[2]==='0' && k[5]==='0' && k[8]==='0')){
            alert("you won the game");
        }
        else if((k[0]==='0' && k[4]==='0' && k[8]==='0') || (k[2]==='0' && k[4]==='0' && k[6]==='0')){
            alert("you won the game");
        }
      
    }

    return (
        <>
        <div className="body">
        <div className="container">
            <div className="header">
                Let's Play Game
            </div>
            <div className="reset-btn">
                <button onClick={resetGame}>Reset</button>
            </div>
            <div className="box-content">
               <div className="box" id="0" onClick={handleBox} ></div>
               <div className="box" id="1" onClick={handleBox} ></div>
               <div className="box" id="2" onClick={handleBox} ></div>
               <div className="box" id="3" onClick={handleBox} ></div>
               <div className="box" id="4" onClick={handleBox} ></div>
               <div className="box" id="5" onClick={handleBox} ></div>
               <div className="box" id="6" onClick={handleBox} ></div>
               <div className="box" id="7" onClick={handleBox} ></div>
               <div className="box" id="8" onClick={handleBox} ></div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Game;










































