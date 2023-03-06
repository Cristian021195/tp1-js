export function ejercicio5(){
    let num1 = window.prompt('Escriba el primer numero');
    if(num1){
        let num2 = window.prompt('Escriba el segundo numero');
        if(num2){
            document.write(parseInt(num1)+parseInt(num2));
        }
        
    }
}