const stepButtons = document.querySelectorAll('.step__button');

stepButtons.forEach(
  element => {
    element.addEventListener('click', event => {
      const stepNum = event.target.dataset.step__num,
            neededTab = document.querySelector(`[data-tab__num="${stepNum}"]`);
      stepButtons.forEach(element => element.classList.remove('active-step-button'))
      event.target.classList.add('active-step-button')
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

const questionsTitles = document.querySelectorAll('.questions__title'),
      previousEventObject = {
        previousEvent: undefined,
        specialPermission: false
      };

const toggleHover = event => {
  console.log(event.type, !((event.type === 'mouseenter' || event.type === 'mouseleave') && event.target === document.activeElement) || previousEventObject.specialPermission)
  if ( !((event.type === 'mouseenter' || event.type === 'mouseleave') && event.target === document.activeElement) || previousEventObject.specialPermission) {
    if ((previousEventObject.previousEvent === 'mouseenter' || previousEventObject.previousEvent === 'blur') && event.type === 'focus') {
      previousEventObject.specialPermission = true;
    }
    else
      previousEventObject.specialPermission = false;
    previousEventObject.previousEvent = event.type
    nextQuestion = event.target.nextElementSibling.nextElementSibling
    if (nextQuestion) {
      nextQuestion.classList.toggle('questions__title-hover-next')
      event.target.classList.toggle('questions__title-hover-it')
    } else {
      if (event.type === 'focus' || event.type === 'blur')
        event.target.classList.toggle('questions__title-hover-last')
      else
        event.target.classList.toggle('questions__title-hover-it')
      document.querySelector('.questions__item.last').classList.toggle('questions__title-hover-it')
    }
  }
};

questionsTitles.forEach(element => {
  const allX = document.querySelectorAll('.x')
  element.addEventListener('focus', event => {
    const currentX = element.childNodes[2]
    document.querySelectorAll('.x').forEach(element => {
      element.style.cssText = 'background: url("img/+х.svg") no-repeat; transform: none;'
      })
    currentX.style.cssText = 'background: url("img/+x_hover_focus.svg") no-repeat; transform: rotate(45deg);'
    toggleHover(event )
  })
  element.addEventListener('blur', event => {
    const currentX = element.childNodes[2]
    currentX.style.cssText = 'background: url("img/+х.svg") no-repeat; transform: rotate(45deg);'
    toggleHover(event)
  })
  element.addEventListener('mouseenter', event => {
    const currentX = element.childNodes[2]
    if (document.activeElement != event.target)
      currentX.style.cssText = 'background: url("img/+x_hover_focus.svg") no-repeat;'
    toggleHover(event)
  })
  element.addEventListener('mouseleave', event => {
    const currentX = element.childNodes[2]
    if (document.activeElement != event.target)
      currentX.style.cssText = 'background: url("img/+х.svg") no-repeat;'
    toggleHover(event)
  })
})


const burger = document.querySelector('.burger'),
      navMenu = document.querySelector('.menu__nav'),
      navList = document.querySelector('.nav__list'),
      closeButton = document.querySelector('.close-button');

let movement,
    pos,
    leftSize;

burger.addEventListener('click', event => {
  leftSize = Number(window.getComputedStyle(navMenu).left.substring(0, 4))
  pos = leftSize
  movement = setInterval(moveMenu, 4, 'forward')
})

closeButton.addEventListener('click', event => {
  pos = 0;
  console.log(leftSize)
  movement = setInterval(moveMenu, 4, 'back', leftSize)
})

function moveMenu(direction, leftSize) {
  console.log('a')
  if (direction === 'back') {
    pos -= 5
    navMenu.style.left = pos + 'px';
    if (navMenu.style.left === leftSize + 'px')
      clearInterval(movement);
  } else if (direction === 'forward') {
    pos += 5
    navMenu.style.left = pos + 'px';
    if (navMenu.style.left === '0px')
      clearInterval(movement);
  } else {
    console.log('Error\nUndefined parameter:', direction)
  }
}

const checkbox = document.querySelector('.consent__checkbox');

checkbox.addEventListener('focus', event => {
  event.target.parentElement.classList.toggle('focus')
})
checkbox.addEventListener('blur', event => {
  event.target.parentElement.classList.toggle('focus')
})
