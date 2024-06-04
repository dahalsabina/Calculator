

 var outputScreen;
 var clearOnEntry;

 var expression="";

//Display a digit on the `outputScreen`
 // @param {number} digit digit to add or display on the `outputScreen`
 function enterDigit(digit){

    if (clearOnEntry){
        outputScreen.textContent="";
        clearOnEntry = false;
    }
    

   outputScreen.textContent += digit;
   expression+=digit;

  
}


//Clear `outputScreen` and set value to 0

function clear_Screen(){
outputScreen.textContent="0"
clearOnEntry=true;
expression = "";


}

function eval_expr(){
    try{
        result = eval (expression);
        if (result!==undefined){
            outputScreen.textContent = result;
            clearOnEntry=true;
            expression = result.toString();

            
            
        }

        else{
            outputScreen.textContent="0";
            clearOnEntry=true;
            expression="";

        }


    }
    catch(e){
        outputScreen.textContent="ERROR";
        clearOnEntry=true;
        expression="";


    }

    }



function enter_Operator(operation){
    if (clearOnEntry){
        clearOnEntry=false;

    }

    else{
        outputScreen.textContent+=operation;
        expression+=operation;

    }
}


window.onload = function (){
    outputScreen = document.querySelector("#result");
    clearOnEntry=true;
    outputScreen.textContent = "0";

}


 