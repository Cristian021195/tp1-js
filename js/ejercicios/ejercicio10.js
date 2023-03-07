export function ejercicio10(){
    let text = window.prompt('Escriba un numero entero') || 0;
    let divisible = {numero:null, status:false};
    let num = parseInt(text);


    if(num % 2 === 0){
        divisible = {numero:2, status:true}
    }else if(num % 3 === 0){
        divisible = {numero:3, status:true}
    }else if(num % 5 === 0){
        divisible = {numero:5, status:true}
    }else if(num % 7 === 0){
        divisible = {numero:7, status:true}
    }

    if(divisible.status){
        return 'El numero: '+num+' es divisible por '+divisible.numero;
    }

    return 'El numero: '+num+' no es divisible por '+divisible.numero;
    
}