
var answer;
var score = 0;
var backgroundImages = [];


function nextQuestion() {
    answer = Math.floor(Math.random() * 9) + 1;

    const n1 = Math.floor(Math.random() * answer);
    document.getElementById('n1').innerHTML = n1;

    const n2 = answer - n1;
    document.getElementById('n2').innerHTML = n2;
}

function checkAnswer() {
    const prediction = predictImage();
    console.log(`Answer: ${answer}, prediction: ${prediction}`);

    if (prediction == answer) {
        score++;
        console.log(`Correct! Score: ${score}`);
        if (score <= 12) {
            if (score % 2 == 0) {
               backgroundImages.push(`url('images/background${score/2}.svg')`);
               document.body.style.backgroundImage = backgroundImages;
            }
        } else {
            endGame();
        }
    } else {
        if (score > 0) { score = score - 2; }
        console.log(`Wrong. Score ${score}`);

        setTimeout(function () {
            backgroundImages.pop();
            document.body.style.backgroundImage = backgroundImages;
        }, 500);
    }
    console.log(prediction == answer);
    return prediction == answer;
}

function endGame() {
    clearCanvas();
    document.getElementById('title').innerHTML = 'Congratulations! Your garden is in full bloom.';
    document.getElementById('title').style.fontWeight = '60';
    document.getElementById('title').style.fontSize = '60px';
    document.getElementById('restartGame').style.display = 'inline';
    document.getElementById('inputSection').style.display = 'none';
    document.getElementById('buttonSection').style.display = 'none';

}

function restartGame() {
    document.getElementById('title').innerHTML = 'Math Garden';
    document.getElementById('title').style.fontWeight = '400';
    document.getElementById('title').style.fontSize = '160px';
    document.getElementById('restartGame').style.display = 'none';
    document.getElementById('inputSection').style.display = 'block';
    document.getElementById('buttonSection').style.display = 'block';
    score = 0;
    backgroundImages = [];
    document.body.style.backgroundImage = backgroundImages;
}