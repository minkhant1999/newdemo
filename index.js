//* Javascript Start Here
var heart = document.querySelector('button.btn-heart');
heart.addEventListener('click', function() {
    document.querySelector('.heart').setAttribute('class', 'heart show');
    document.querySelector('.btn-heart').setAttribute('class', 'btn-heart hide');
});

