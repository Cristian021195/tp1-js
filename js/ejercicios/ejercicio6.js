export function ejercicio6(){
    let num1 = window.prompt('Escriba el primer numero');
    let res = '';
    if(num1){
        let num2 = window.prompt('Escriba el segundo numero');
        if(num2){
            //document.write(parseInt(num1)+parseInt(num2));
            if(parseInt(num1) > parseInt(num2)) {
                res = num1;
            }else{
                res = num2;
            }
        }
        
    }
    return res;
}