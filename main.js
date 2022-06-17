function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let resultado = document.querySelector('div#res');
    if(fano.value.length === 0 || Number(fano.value) > ano){
        window.alert('[EROOR] Verifique os dados e tente novamente.');
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked) {
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'assets/foto-bebe-m.png');
            } else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'assets/foto-jovem-m.png');

            } else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'assets/foto-adulto-m.png');
            } else {
                // Idoso
                img.setAttribute('src', 'assets/foto-idoso-m.png');
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'assets/foto-bebe-f.png');
            } else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'assets/foto-jovem-f.png');
            } else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'assets/foto-adulto-f.png');
            } else {
                // Idoso
                img.setAttribute('src', 'assets/foto-idoso-f.png');
            }
        }
        resultado.style.textAlign = 'center';
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos!`;
        resultado.appendChild(img);
    }
}