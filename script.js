function keypress(){
    if(event.keyCode >= 48 && event.keyCode <= 57){
        calc.txt.value+= (event.keyCode -48).toString();
    }
};