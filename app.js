const tickerForm = document.querySelector('#ticker-form');
const tickerText = document.querySelector('#ticker-text');
const ticker = document.querySelector('.ticker');
const price = document.querySelector('.price');

const getPrice = (e) => {
    e.preventDefault();
    
    axios.get(`https://api.cryptonator.com/api/ticker/${tickerText.value.toLowerCase()}-usd`).then((res) => {
        ticker.textContent = res.data.ticker.base;
        price.textContent = res.data.ticker.price;
        tickerText.value = " ";
    })
}

tickerForm.addEventListener('submit', getPrice);

