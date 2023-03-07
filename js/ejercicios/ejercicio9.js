export function ejercicio9(){
    let text = window.prompt('Escriba una frase para saber sus vocales') || '';
    let long = text.length;
    let vocales = '';

    for(let i = 0; i < long; i++){
        switch (text[i]) {
            case 'a':{
                vocales+='-'+text[i];
            }
            break;
            case 'e':{
                vocales+='-'+text[i];
            }                
            break;
            case 'i':{
                vocales+='-'+text[i];
            }                
            break;
            case 'o':{
                vocales+='-'+text[i];
            }                
            break;
            case 'u':{
                vocales+='-'+text[i];
            }                
            break;        
            default:
                break;
        }
    }

    return vocales;
    
}