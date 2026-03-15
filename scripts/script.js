// Grab elements
const tosButton = document.getElementById('TOS');
const moneyContainer = document.getElementById('moneyContainer');
const moneyButton = document.getElementById('Button');
const gif = document.getElementById('GIF');
const h6 = document.getElementById('H6');
const p = document.getElementById('P');

// show headings and money button only after TOS accepted
tosButton.addEventListener('click', () => {
    moneyContainer.style.display = 'flex';  // show money container/button for free money
    h6.style.display = 'flex';              // show heading
    p.style.display = 'flex';               // show paragraph
    tosButton.style.display = 'none';       // hide TOS button
});

moneyButton.addEventListener('click', () => {
    gif.style.display = 'block';
});