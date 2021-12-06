const evenContainer = document.querySelector('.even');
const oddContainer = document.querySelector('.odd');
const button = document.querySelector('.btn');

const generateNumbers = () => {
  evenContainer.innerHTML = '<b>Even numbers:</b>';
  oddContainer.innerHTML = '<b>Odd numbers:</b>';
  const odd = [];
  const even = [];

  for (i = 0; i < 20; i++) {
    const randomNumber = (Math.random() * 100).toFixed(0);
    randomNumber % 2 === 0 ? even.push(randomNumber) : odd.push(randomNumber);
  }

  odd.sort((a, b) => a - b);
  even.sort((a, b) => a - b);

  evenContainer.innerHTML += even;
  oddContainer.innerHTML += odd;
};

document.addEventListener('click', generateNumbers);
