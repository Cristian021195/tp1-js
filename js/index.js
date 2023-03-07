import {ejercicio1} from './ejercicios/ejercicio1.js';
import {ejercicio2} from './ejercicios/ejercicio2.js';
import {ejercicio3} from './ejercicios/ejercicio3.js';
import {ejercicio4} from './ejercicios/ejercicio4.js';
import {ejercicio5} from './ejercicios/ejercicio5.js';
import {ejercicio6} from './ejercicios/ejercicio6.js';
import {ejercicio7} from './ejercicios/ejercicio7.js';
import {ejercicio8} from './ejercicios/ejercicio8.js';
import {ejercicio9} from './ejercicios/ejercicio9.js';
import {ejercicio10} from './ejercicios/ejercicio10.js';
import {ejercicio11} from './ejercicios/ejercicio11.js';

//variables dom
const $resultados = document.getElementById('resultados');

window.addEventListener('click', (e)=>{
    if(e.target.id !== '' & e.target.id !== null){
        switch (e.target.id) {
            case 'ejercicio1': {
                ejercicio1()
            }          
                break;
            case 'ejercicio2': {
                $resultados.textContent = 'ejercicio 2:  '+ejercicio2()
            }
                break;
            case 'ejercicio3': {
                $resultados.textContent = 'ejercicio 3:  '+ejercicio3()
            }                
                break;
            case 'ejercicio4': {
                $resultados.textContent = 'ejercicio 4:  '+ejercicio4()
            }                
                break;
            case 'ejercicio5': {
                $resultados.textContent = 'ejercicio 5:  '+ejercicio5()
            }                
                break;
            case 'ejercicio6': {
                $resultados.textContent = 'ejercicio 6:  '+ejercicio6()
            }                
                break;
            case 'ejercicio7': {
                $resultados.textContent = 'ejercicio 7:  '+ejercicio7()
            }                
                break;
            case 'ejercicio8': {
                $resultados.textContent = 'ejercicio 8:  '+ejercicio8()
            }                
                break;
            case 'ejercicio9': {
                $resultados.textContent = 'ejercicio 9:  '+ejercicio9()
            }                
                break;
            case 'ejercicio10': {
                $resultados.textContent = 'ejercicio 10:  '+ejercicio10()
            }                
                break;
            case 'ejercicio11': {
                $resultados.textContent = 'ejercicio 11:  '+ejercicio11()
            }
            default:
                break;
        }
    }
})

setTimeout(() => {
    //ejercicio10();
    //ejercicio11();
}, 2000);