let isPlaying = confirm('Do you want to play a game?');
if (isPlaying){
    while (isPlaying) {
        let prize = 100;
        let totalPrize = 0;
        let range = 9;
        let prizeMultiplier = 2;
        let isContinue;
        let numOfAttempts = 3;
        let prizeDivider = 1;
        let increaseAttempts = 4;
        let increasePrizeDivider = 2;
        let increaseRange = 4;
        let secretNumber = Math.floor(Math.random() * range);
        for (numOfAttempts; numOfAttempts > 0; --numOfAttempts){
            let playerChoice = prompt(
                                'Choose a roulette pocket number from 0 to ' + (range - 1) + '\n' +
                                        'Attempts left: ' + numOfAttempts + '\n' +
                                        'Total prize: ' + totalPrize + '$ \n' +
                                        'Possible prize on current attempt: ' + prize / prizeDivider + '$'
                                    );
            if ( !isNaN(playerChoice) && secretNumber === +playerChoice){
                totalPrize = totalPrize + prize / prizeDivider;
                prize = prize * prizeMultiplier;
                range += increaseRange;
                prizeDivider = 1;
                isContinue = confirm(
                                    'Congratulation, you won! \n  Your prize is: ' + totalPrize +
                                    '$ \n Do you want to continue?'
                                    );
                if (isContinue){
                    numOfAttempts = increaseAttempts;
                    secretNumber = Math.floor(Math.random() * range);
                } else {
                    break
                }
            } else {
                prizeDivider = prizeDivider * increasePrizeDivider;
            }
        }
        alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
        isPlaying = confirm('Do you want to play again?');
    }
} else {
    alert('You did not become a billionaire, but can.');
}
