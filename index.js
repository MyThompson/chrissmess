class App {
  constructor() {
    this.list = document.querySelector('#flicks')
    this.flicks = []
    this.load()

    const form = document.querySelector('form#flickForm')
    form.addEventListener('submit', (ev) => {
      ev.preventDefault()
      this.handleSubmit(ev)
    })
  }

  save() {
    localStorage.setItem('flicks', JSON.stringify(this.flicks))
  }

  load() {
    const flicks = JSON.parse(localStorage.getItem('flicks'))

    flicks.forEach(flick => this.addFlick(flick))
  }

  renderProperty(name, value) {
    const span = document.createElement('span')
    span.classList.add(name)
    span.textContent = value+'  '
    return span
  }

  renderProperties(flick) {
    const div = document.createElement('div')
    div.classList.add('info')

    const properties = Object.keys(flick)

    properties.forEach((propertyName) => {
      const span = this.renderProperty(propertyName, flick[propertyName])
      div.appendChild(span)
    })

    return div
  }

  renderActionButtons(flick, item) {
    const actions = document.createElement('div')
    actions.classList.add('actions')

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('remove')
    deleteButton.textContent = 'delete'
    deleteButton
      .addEventListener(
        'click',
        (_ev) => this.removeFlick(flick, item)
      )
    actions.appendChild(deleteButton)

    return actions
  }

  renderItem(flick) {
    const item = document.createElement('li')
    item.classList.add('flick')

    const properties = this.renderProperties(flick)
    item.appendChild(properties)

    const actions = this.renderActionButtons(flick, item)
    item.appendChild(actions)

    return item
  }

  removeFlick(flick, item) {
    this.list.removeChild(item)

    const i = this.flicks.indexOf(flick)
    this.flicks.splice(i, 1)

    this.save()
  }

  addFlick(flick) {
    this.flicks.push(flick)
    this.save()


    const item = this.renderItem(flick)

    this.list.appendChild(item)
  }

  handleSubmit(ev) {
    const f = ev.target

    const flick = {
      name: f.flickName.value,
      chris: f.chrisName.value,
    }

    this.addFlick(flick)

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