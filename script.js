document.addEventListener('DOMContentLoaded', function () {
    const btnLogin = document.getElementById('btnLogin');
    btnLogin.addEventListener('click', function () {
        this.innerText = 'Cerrar Sesión';
    });

    const btnDefinition = document.getElementById('btnDefinition');
    btnDefinition.addEventListener('click', function () {
        this.remove();
    });

    const btnLike = document.getElementsByClassName('btn-like');
    for (let i = 0; i < btnLike.length; i++) {
        btnLike[i].addEventListener('click', function () {
            alert(this.getAttribute('data-name') + 'was liked');
            this.querySelector('span').innerText = parseInt(this.querySelector('span').innerText) + 1;
        });
    }
});