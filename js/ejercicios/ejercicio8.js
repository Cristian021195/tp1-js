export function ejercicio8(){
    let num = window.prompt('Escriba el primer numero');
    let res = 'No es divisible por dos';
    if(num){
        if(parseInt(num) % 2 == 0){
            res = 'Es divisible por 2';
        }
    }else{
        res = 'operacion cancelada o valor incorrecto';
    }

    return res;
}