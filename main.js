const btn1 = document.getElementById('btn-1')
const personal = document.getElementById('personal-info')
const plans = document.getElementById('plans')
const inputs = document.querySelectorAll('.form-input')

btn1.addEventListener('input', (e) => {
    e.preventDefault()

    inputs.forEach(i => {
        if (i.value == '') {
            console.log("preencha")
        } else {
            personal.classList.add('hide')
            plans.classList.remove('hide')
        }
    })
})