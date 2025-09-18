const getStartedButton = document.getElementById('getStartedButton');
const emailInput = document.getElementById('emailInput');
const trendingList = document.getElementById('trendingList');
const scrollRightButton = document.getElementById('scrollRight');

getStartedButton.addEventListener('click', function() {
    const email = emailInput.value;
    if (email) {
        alert(`You entered: "${email}". This would normally take you to a registration page!`);
    } else {
        alert('Please enter your email address to get started.');
    }
});

scrollRightButton.addEventListener('click', function() {
    trendingList.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});