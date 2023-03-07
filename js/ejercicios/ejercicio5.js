export function ejercicio5(){
    let num1 = window.prompt('Escriba el primer numero');
    let res = '';
    if(num1){
        let num2 = window.prompt('Escriba el segundo numero');
        if(num2){
            res = (parseInt(num1)+parseInt(num2));
        }        
    }

    return res;
}