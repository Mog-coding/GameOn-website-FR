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