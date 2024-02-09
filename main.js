const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const aInput = document.getElementById('A');
    const bInput = document.getElementById('B');

    const a = parseFloat(aInput.value);
    const b = parseFloat(bInput.value);

    const tudoCerto = document.querySelector('.tudoCerto');
    const numInvalido = document.querySelector('.numInvalido');

    if (a < b) {
        tudoCerto.innerHTML = `Parabéns! O número: <b>${a}</b> é menor que número: <b>${b}</b>!`;
        tudoCerto.style.display = 'block';
        numInvalido.style.display = 'none';
        
        aInput.value = '';
        bInput.value = '';
    } else {
        numInvalido.innerHTML = 'O <b>número</b> no campo A deve ser menor que o <b>número</b> no campo B!';
        tudoCerto.style.display = 'none';
        numInvalido.style.display = 'block';
        
        aInput.value = '';
        bInput.value = '';
    }
});