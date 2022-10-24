const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items= document.querySelectorAll('.deadline-format h4');

const addDaysBtn = document.getElementById('add-ten');
const setToZero = document.getElementById('zero');

let futureDate = new Date(2023,8,25);

giveaway.textContent = `Giveaway ends on ${weekdays[futureDate.getDay()]}, ${futureDate.getDay()} ${months[futureDate.getMonth()]} ${futureDate.getFullYear()} at 00:00hs.`;


function getRemainingTime () {
  // future time in milisecs
  const futureTime = futureDate.getTime()
  const today = new Date().getTime();
  const remaining = futureTime - today;

  // tiempo en ms
  const second = 1000
  const minute = 60*second;
  const hour = 60*minute;
  const day = 24*hour;

  // tiempos restantes en dias, horas, minutos y sec
  let remainingDays = Math.floor(remaining/day)
  let remainingHours = Math.floor((remaining%day)/hour)
  let remainingMinutes = Math.floor((remaining%hour)/minute)
  let remainingSeconds = Math.floor((remaining%minute)/second)

  // funcion de formato para que siempre tengan dos cifras
  function format (item) {
    if (item < 10) {
      return item = `0${item}`
    }
    return item;
  }

  // array con tiempos restantes formateados
  const values = [remainingDays, remainingHours, remainingMinutes, remainingSeconds];

  // llenar campos de html con tiempos restantes
  items.forEach((item, index)=> item.innerHTML= format(values[index]))

  // si ya se termino contador mostrar otra cosa
  if(remaining<0){
    console.log('expirado');
    clearInterval(countdown);
    deadline.classList.add('hidden');
    setToZero.classList.add('hidden');
    document.querySelector('.expired').classList.remove('hidden')
    addDaysBtn.classList.remove('hidden');
  }
}

// countdown (actualiza cada un sec)
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()

addDaysBtn.addEventListener('click', ()=>{
  const today = new Date();
  futureDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()+10)
  countdown = setInterval(getRemainingTime, 1000)
  getRemainingTime()
  deadline.classList.remove('hidden');
  document.querySelector('.expired').classList.add('hidden');
  setToZero.classList.remove('hidden');
  addDaysBtn.classList.add('hidden');
})

setToZero.addEventListener('click', ()=>{
  futureDate = new Date()
  getRemainingTime()
  deadline.classList.add('hidden');
  document.querySelector('.expired').classList.remove('hidden');
  setToZero.classList.add('hidden');
  addDaysBtn.classList.remove('hidden');
})