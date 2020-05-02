
const correctAnswers = ['B','B','B','B','no'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const body = document['body'];

$(document).ready(function () {
    $('body').bind('cut copy paste', function (e) {
        e.preventDefault();
        alert("You can't copy or paste to this site");
    });
});

body.addEventListener('contextmenu',e => {
    e.preventDefault();
});

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value.toLowerCase()];

    //check answers
    userAnswers.forEach((answer,index)=>{
        if(answer === correctAnswers[index]){
            score +=20;
        }
    });

    // show result
    scrollTo(0,0);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});