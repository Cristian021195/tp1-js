export function ejercicio4(){
    let res = window.prompt('Escriba su nombre');
    if(res){
        //console.log('Hola '+res);
        return 'Hola '+res;
    }
    return 'operacion cancelada';
}