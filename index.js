
let flickArray = new Array
let num = 0

class App {
  constructor() {
    const form = document.querySelector('form#flickForm')
    form.addEventListener('submit', (ev) => {
      ev.preventDefault()
      this.handleSubmit(ev)
    })
  }

  renderProperty(name, value) {
    const span = document.createElement('span')
    span.classList.add(name)
    span.textContent = value+'  '
    return span
  }

  renderItem(flick) {
    const item = document.createElement('li')
    item.classList.add('flick')

    const del = document.createElement('button')
    del.textContent = 'delete'
    del.classList.add('num')
    num++

    const properties = Object.keys(flick)

    properties.forEach((propertyName) => {
      const span = this.renderProperty(propertyName, flick[propertyName])
      item.appendChild(span)
      item.appendChild(del)
    })

    return item
  }

  handleSubmit(ev) {
    const f = ev.target

    const flick = {
      title: f.flickName.value,
      chris: f.chrisName.value,
    }

    const item = this.renderItem(flick)

    const list = document.querySelector('#flicks')
    list.appendChild(item)
    flickArray.push(item)

    f.reset()
    f.flickName.focus()
  }
}

const app = new App()

// const b1 = document.querySelector('#b1')
// const b2 = document.querySelector('#b2')
// const t1 = document.querySelector('#t1')
// const t2 = document.querySelector('#t2')

// function firstThing(){
//     const p = document.querySelector('#c1')
//     p.textContent = t1.value
// }

// function secondThing(){
//     const p = document.querySelector('#c2')
//     p.textContent = t2.value
// }

// b1.addEventListener('click', firstThing)
// b2.addEventListener('click', secondThing)

// t1.addEventListener('keypress', function(event) {
//     if (event.keyCode == 13) {
//         b1.click()
//         event.preventDefault()
//     }})
// t2.addEventListener('keypress', function(event) {
//     if (event.keyCode == 13) {
//         b2.click()
//         event.preventDefault()
//     }})

// const form = document.querySelector('form#flickForm')

// const addToList = function(item){
//   const list = document.querySelector('#flicks')
//   list.appendChild(item)
// }

// const renderItem = function(flick){
//   const item = document.createElement('li')
//   item.classList.add('flick')

//   const properties = Object.keys(flicks)

//   properties.forEach(funtion(propertyName){
//    const span = renderProperty(propertyName,flick[propertyName]),
//    item.appendChild(span)
//   })
  
//   return item
// }

// const createItem = function(ev) {
//   ev.preventDefault()
//   const f = ev.target

//   const flick = {
//     name: f.flickName.value,
//     chris: f.chrisName.value,
//   }

//   const flickName = f.flickName.value
//   const rating = f.rating.value
//   const item = document.createElement('li')
//   const title = document.createElement('span')
//   const rate = document.createElement('span')
  
//   title.textContent = flickName
//   rate.textContent = ', Rating: '+rating
//   item.appendChild(title)
//   item.appendChild(rate)

//   var att = document.createAttribute('class');
//   att.value = 'title'
//   title.setAttributeNode(att);

//   addToList(item)

//   f.reset()
// }

// form.addEventListener('submit', createItem)