const btn = document.querySelector('#btn-contar');
const dias = document.querySelector('#dias');
const hora = document.querySelector('#horas');
const min = document.querySelector('#min');
const seg = document.querySelector('#seg')

let tempoRestante;
let intervalId;


let d ;
let h;
let m;
let s;

const inciarContagem = () =>{
    const tempoSelecionado = document.querySelector('#tempo');
    tempoRestante = parseInt(tempoSelecionado.value);
    let tempoUtil = tempoRestante * 86400
    
    
    intervalId = setInterval(()=>{
        if(tempoUtil != 0){
            d = Math.floor(tempoUtil / 60 / 60 / 24);
            h = Math.floor(tempoUtil / 60 / 60)%24;
            m = Math.floor(tempoUtil / 60) %60;
            s = Math.floor(tempoUtil)%60
            tempoUtil--;
        }else{
            clearInterval()
        }
        atualizaContador();
    },1000) 
    
    
}

const atualizaContador = () =>{
    dias.textContent = d < 10 ? '0' + d : d;
    hora.textContent = h < 10 ? '0' + h : h;
    min.textContent = m < 10 ? '0' + m : m;
    seg.textContent = s < 10 ? '0' + s : s;
    
}

btn.addEventListener('click', inciarContagem)