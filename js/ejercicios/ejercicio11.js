export function ejercicio11(){
    let text = window.prompt('Escriba un numero entero') || 0;
    let divisibles = [];
    let num = parseInt(text);
    let res = '';


    if(num % 2 === 0){
        divisibles.push(2);
    }
    if(num % 3 === 0){
        divisibles.push(3);
    }
    if(num % 5 === 0){
        divisibles.push(5);
    }
    if(num % 7 === 0){
        divisibles.push(7);
    }

    res = 'El numero '+num+' es divisible por: '+divisibles.toString();

    return res;
    
}