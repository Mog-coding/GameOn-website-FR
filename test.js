function un(){
    return 1;
}
function deux(){
    return 2;
}
function call(fonction){
    if (fonction < 2){
        console.log("un")
    }else{
        console.log("deux")
    }
}
call(un()); //un
call(deux); //deux

.button {
    background: #fe142f;
    margin-top: 0.5em;
    padding: 1em;
    color: #fff;
    border-radius: 15px;
    cursor: pointer;
    font-size: 16px;
  }