import '../src/styles/index.css';

const moreBtn = document.querySelector('.option_btn_more');
const hiddenTime = document.querySelectorAll('.option_btn_disable');

console.log(hiddenTime)

function getOptions() {
  moreBtn.classList.add('option_btn_disable');

  for (const elem of hiddenTime) {
    elem.classList.remove('option_btn_disable');
  }
};

moreBtn.addEventListener('click', getOptions);