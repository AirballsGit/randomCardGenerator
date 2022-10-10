

const btn = document.querySelector('input[type="submit"]');
const sect = document.querySelector('section');

btn.addEventListener('click', function(e){
    sect.innerText = '';
    const suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
    const values = ['2','3','4','5','6','7','8','9', '10', 'Jack', 'Queen', 'King', 'Ace'];

    let suit = Math.floor(Math.random() * suits.length);
    const value = Math.floor(Math.random() * values.length);
    const pickVal = values[value];
    const pickSuit = suits[suit];
    const theCard = `You Picked the ${pickVal} of ${pickSuit}`;
    // const jsonCard = JSON.stringify(theCard);
    // const strCard = JSON.parse(jsonCard);
    sect.append(theCard);
    
    
})