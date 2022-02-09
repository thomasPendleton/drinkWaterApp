const smallCups = document.querySelectorAll('.small-cup')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, i) => {
  cup.addEventListener('click', (e) => {
    highlightCups(i)
  })
})

function highlightCups(index) {
  if (
    smallCups[index].classList.contains('drank') &&
    !smallCups[index].nextElementSibling.classList.contains('drank')
  ) {
    index--
  }

  smallCups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add('drank')
    } else {
      cup.classList.remove('drank')
    }
  })
  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.small-cup.drank').length
}
