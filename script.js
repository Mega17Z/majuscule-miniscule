let saisi = document.getElementById('saisi');
let change = document.getElementById('change');
// let textinput = saisi.getAttribute('placeholder');
let click = false;

change.addEventListener('click', function(){
    if(click == false){
        saisi.addEventListener('keyup', function(){
            saisi.value = saisi.value.toUpperCase();
        })
        change.style.backgroundColor = 'green';
        saisi.placeholder = 'Texte en Majuscule';
        click = true;
    }else{
        saisi.addEventListener('keyup', function(){
            saisi.value = saisi.value.toLowerCase();
        })
        change.style.backgroundColor = 'rgb(183, 183, 3)';
        saisi.placeholder = 'Texte en Miniscule';
        click = false;
    }
})