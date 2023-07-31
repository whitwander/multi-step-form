// Buttons Next and Back
const btnNext = document.querySelectorAll('.next')
const btnBack = document.querySelectorAll('.back')

// Each page the runs
const personal = document.getElementById('personal-info')
const plans = document.getElementById('plans')
const addOns = document.getElementById('add-ons')
const finishing = document.getElementById('finishing')
const thank = document.getElementById('thank')

// Steps on the left
const steps1 = document.getElementById('steps-1')
const steps2 = document.getElementById('steps-2')
const steps3 = document.getElementById('steps-3')
const steps4 = document.getElementById('steps-4')


// Variable that controls tha pages 
let page = 0


// For each of button next
btnNext.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        mudaPagina()
        console.log(page)
    })
})


// For each of button back
btnBack.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log('click')
        e.preventDefault()
        voltaPagina()
        console.log(page)
    })
})


// Function that make pages go forward
function mudaPagina() {
    if (page == 0) {
        personal.classList.toggle('hide')
        plans.classList.toggle('hide')
        page++
        steps1.classList.toggle('active')
        steps2.classList.toggle('active')
    } else if (page == 1) {
        plans.classList.toggle('hide')
        addOns.classList.toggle('hide')
        page++
        steps2.classList.toggle('active')
        steps3.classList.toggle('active')
    } else if (page == 2) {
        addOns.classList.toggle('hide')
        finishing.classList.toggle('hide')
        page++
        steps3.classList.toggle('active')
        steps4.classList.toggle('active')
    } else if (page == 3) {
        finishing.classList.toggle('hide')
        thank.classList.toggle('hide')
        steps4.classList.remove('active')
    }
}


// Function that make pages go back
function voltaPagina() {
    if (page == 1) {
        personal.classList.toggle('hide')
        plans.classList.toggle('hide')
        page--
        steps1.classList.toggle('active')
        steps2.classList.toggle('active')
    } else if (page == 2) {
        plans.classList.remove('hide')
        addOns.classList.add('hide')
        page--
        steps2.classList.toggle('active')
        steps3.classList.toggle('active')
    } else if (page == 3) {
        addOns.classList.toggle('hide')
        finishing.classList.toggle('hide')
        page--
        steps3.classList.toggle('active')
        steps4.classList.toggle('active') 
    }
}