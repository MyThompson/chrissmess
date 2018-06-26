const b1 = document.querySelector('#b1')
const b2 = document.querySelector('#b2')
const t1 = document.querySelector('#t1')
const t2 = document.querySelector('#t2')

function firstThing(){
    const p = document.querySelector('#c1')
    p.textContent = t1.value
}

function secondThing(){
    const p = document.querySelector('#c2')
    p.textContent = t2.value
}

b1.addEventListener('click', firstThing)
b2.addEventListener('click', secondThing)

t1.addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {
        b1.click()
        event.preventDefault()
    }})
t2.addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {
        b2.click()
        event.preventDefault()
    }})