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

// inputs first page
const name = document.getElementById('name')
const eMail = document.getElementById('e-mail')
const number = document.getElementById('number')

// Errors from css
const erroCampos = document.querySelector('.erro-campos')
const erroEmail = document.querySelector('.erro-email')

// Plans form html
const arcade = document.getElementById('arcade')
const advanced = document.getElementById('advanced')
const pro = document.getElementById('pro')
const check = document.getElementById('check')
const month = document.getElementById('monthly')
const year = document.getElementById('yearly')
const preçosMes = document.querySelectorAll('.price-month')
const preçosAno = document.querySelectorAll('.price-year')
const mesesGratis = document.querySelectorAll('.btn-free-months')

// Variable that controls tha pages 
let page = 0

// For each of button next
btnNext.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        checkInputs()
    })
})

// For each of button back
btnBack.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        voltaPagina()
    })
})

// Function to check if the inputs is empty or incorrect
function checkInputs() {
    let nomeValue = name.value
    let eMailValue = eMail.value
    let numberValue = number.value

    function validacaoEmail(input) {
        let emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}/;
        return emailRegex.test(input)
    }

    if (nomeValue, eMailValue, numberValue == '') {
        erroCampos.classList.remove('hide')
    } else if (validacaoEmail(eMailValue) !== true) {
        erroCampos.classList.add('hide')
        eMail.classList.add('erro')
        erroEmail.classList.remove('hide')
    } else {
        erroEmail.classList.add('hide')
        eMail.classList.remove('erro')
        mudaPagina()
    }
}

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

arcade.addEventListener('click',() => {
    arcade.classList.add('selected-plan')
    advanced.classList.remove('selected-plan')
    pro.classList.remove('selected-plan')
})

advanced.addEventListener('click',() => {
    advanced.classList.add('selected-plan')
    arcade.classList.remove('selected-plan')
    pro.classList.remove('selected-plan')
})

pro.addEventListener('click',() => {
    pro.classList.add('selected-plan')
    arcade.classList.remove('selected-plan')
    advanced.classList.remove('selected-plan')
})

check.addEventListener('click', () => {
    preçosAno.forEach(p => {
        p.classList.toggle('hide')
    }) 

    preçosMes.forEach(p => {
        p.classList.toggle('hide')
    })

    
    
    if(check.checked) {
        year.classList.add('selected')
        year.classList.remove('deselected')
        month.classList.remove('selected')
        month.classList.add('deselected')
        mesesGratis.forEach(m => {
            m.classList.remove('hide')
        })
    } else {
        year.classList.remove('selected')
        year.classList.add('deselected')
        month.classList.add('selected')
        month.classList.remove('deselected')
        mesesGratis.forEach(m => {
            m.classList.add('hide')
        })
    }
})