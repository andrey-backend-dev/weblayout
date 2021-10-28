document.querySelectorAll('.step__button').forEach(
  element => {
    element.addEventListener('click', event => {
      const stepNum = event.target.dataset.step__num,
            neededTab = document.querySelector(`[data-tab__num="${stepNum}"]`);
      if (neededTab) {
        document.querySelectorAll('.step-description__item').forEach(
          element => {element.classList.remove('active-step');}
        )
        neededTab.classList.add('active-step');
      } else {
        alert('Таб под эту кнопку еще не создан!')
      }
    })}
);
document.querySelectorAll('.questions__title').forEach(element => {
  element.addEventListener('focus', event => {
    document.querySelectorAll('.x').forEach(element => {
      element.style.transform = "none";
    })
    element.childNodes[2].style.transform = "rotate(45deg)";
  })
})

