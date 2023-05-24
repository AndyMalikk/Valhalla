//deklaruju elementy pomoci selectoru z class
const slider = document.querySelector('#image-slider');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const header = document.querySelector('.caption h1');
const description = document.querySelector('.caption p');

// obrazky
const images = [
  "/imgs/OpenGym.jpg","/imgs/StrongmanGym.png","/imgs/Recepce.png"
];
const headings = [
  'Fitness Gym','Open Gym', 'Reception'
];
const descriptions = [
  'A gym with lots of free weights and some great machines.', 'A gym for strongmen to lift heavy-ahh weights.', 'Nice and spaceful reception.'
];

//momentalni poradi 
let id = 0;
function slide(id) {
  slider.style.backgroundImage = `url(${images[id]})`
  //image fade animation
  slider.classList.add('image-fade');
  //remove animation after its done
  setTimeout(() => {
    slider.classList.remove('image-fade');
  }, 550);
  //change heading
  header.innerText = headings[id];
  description.innerText = descriptions[id];
}
//udelam funkci ktera se vykona pri kliknuti

//leftarrow
arrLeft.addEventListener('click', () => {
  //zmensi image id aby se objevil predchozi obrazek
  id--;
  // jestli je id mensi nez 0 skoc na 2
  if(id < 0){
    id = images.length -1;
  }
  //potom se rozjede slide funkce
  slide(id);
});
//rightarr
arrRight.addEventListener('click', () => {
  //stejny jak predtim jen zvetsuju
  id++;
  
  if(id > images.length -1){
  id = 0;
  }
  slide(id);
});


  /*SCROLL ANIMATION*/
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    delay: 250  , 
  })

sr.reveal('.intro-name')
sr.reveal('.intro-hashtag',{delay:300, origin:'bottom'})
sr.reveal('.quote, #workouts, #prices',{interval: 100})
sr.reveal('.author, #image-slider, .map, .container',{interval: 100, origin: 'bottom'})
sr.reveal('.footer-text',{interval: 100, origin: 'left'})

function calculateBmi() {
  let weight = document.getElementById('weight').value
  let height = document.getElementById('height').value
  
  let bmi = weight / (height / 100) ** 2
  
  document.getElementById('heading').innerHTML = 'Your BMI is:'
  document.getElementById('bmi-output').innerHTML = bmi.toFixed(2)
  
  if (bmi <= 24.9) {
    document.getElementById('message').innerHTML = 'You are underweight'
  } else if (bmi >= 25 && bmi <= 29.9) {
    document.getElementById('message').innerHTML = 'Your weight is normal'
  } else {
    document.getElementById('message').innerHTML = 'You are overweight'
  }
}

function reload() {
  document.getElementById('weight').value = ''
  document.getElementById('height').value = ''
  document.getElementById('heading').innerHTML = ''
  document.getElementById('bmi-output').innerHTML = ''
  document.getElementById('message').innerHTML = ''
}







