//armazeno a Data em uma função
function pegarHora() {
    const data = new Date(Date.now());
    return data
}
//Função que formata e exibe o relogio
function relogio() {
const mostraRelogio = document.querySelector('.hour');
pegarHora()
const hora = pegarHora().getHours()
const minuto = pegarHora().getMinutes()
    const segundo = pegarHora().getSeconds()
    let horas = hora < 10 ? "0" + hora : hora
    let minutos = minuto < 10 ? "0" + minuto : minuto
    let segundos = segundo < 10 ? "0"+segundo: segundo
    return mostraRelogio.innerHTML = `${horas}: ${minutos}: ${segundos}`
}


// função que valida e mostra a mensagem 
function validaçãoMensagem() {
    const messagem = document.querySelector('.message')
    
    pegarHora()
    
    if (pegarHora().getHours() >=6 && pegarHora().getHours() < 13) {
        return messagem.innerHTML = 'Bom Dia'
    }else if (pegarHora().getHours() >= 13 && pegarHora().getHours()<=18) {
        return messagem.innerHTML = 'Boa tarde'
    } else  {
        return messagem.innerHTML = 'Boa Noite'
        
    }  
    
}
//Função de validar o Fundo
function mudaFundo() {
    const fundo = document.querySelector('body')
    pegarHora()
    if (pegarHora().getHours() >=6 && pegarHora().getHours() < 13) {
        return fundo.style.backgroundImage ="url('https://cdn.discordapp.com/attachments/753423475720454297/1054005844037091328/dia.webp')"
    }else if (pegarHora().getHours() >= 13 && pegarHora().getHours()<=18) {
        return fundo.style.backgroundImage="url('https://media.discordapp.net/attachments/753423475720454297/1054005681365188628/tarde.jpg?width=1005&height=670')"
       
    } else {
        return fundo.style.backgroundImage ="url('https://cdn.discordapp.com/attachments/753423475720454297/1054005681126125678/noite.jpg')"


        
    }  
}
validaçãoMensagem()
mudaFundo()
setInterval(relogio,1000) ;


