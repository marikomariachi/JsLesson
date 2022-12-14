/*function functionName (Parametre1,Parametre2){


    return Parametre1 * Parametre2;

}

alert(functionName(2,3));

function functiononwithoutreturn(Parametre1,Parametre2){

    alert("This is a function without return statement")
}
functiononwithoutreturn(2,3,4);


function functionName2 (x,y){

    if(y==undefined){
        y=0
    }
}
*/

x =findMax(1,123,44,56,86,123);

function findMax(){

    var i ,max=0;
    for(i=0;i<arguments.length;i++){
        if(arguments[i]>max){
            max=arguments[i];   
        }
    }
    return max
}