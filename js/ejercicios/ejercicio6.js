export function ejercicio6(){
    let num1 = window.prompt('Escriba el primer numero');
    if(num1){
        let num2 = window.prompt('Escriba el segundo numero');
        if(num2){
            //document.write(parseInt(num1)+parseInt(num2));
            if(parseInt(num1) > parseInt(num2)) {
                document.write(num1);
            }else{
                document.write(num2);
            }
        }
        
    }
}