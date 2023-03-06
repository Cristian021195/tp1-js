export function ejercicio7(){
    let num1 = window.prompt('Escriba el primer numero');
    if(num1){
        let num2 = window.prompt('Escriba el segundo numero');
        if(num2){
            let num3 = window.prompt('Escriba el segundo numero');
            let a = parseInt(num1); let b = parseInt(num2);

            if(num3){
                let c = parseInt(num3); // 5 4 3  -  4 3 5  -  4 3 5 
                if((a > b) && (b>c)){ document.write(a) }
                else if((a < b) && (b < c)){
                    document.write(c)
                }else{ document.write(b) }
            }
        }        
    }
}