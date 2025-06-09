function circle() {
    let circle = document.querySelector('#figure')
    circle.style.borderRadius = '100%'
    circle.style.background = 'green'
    circle.style.transform = 'rotate(0deg)'
    circle.style.width = '200px'
    circle.style.height = '200px'
}
function square() {
    let square = document.querySelector('#figure')
    square.style.borderRadius = '0'
    square.style.background = 'green'
    square.style.transform = 'rotate(0deg)'
    square.style.width = '200px'
    square.style.height = '200px'
}
function oval() {
    let oval = document.querySelector('#figure')
    oval.style.borderRadius = '100%'
    oval.style.width = '300px'
    oval.style.background = 'green'
    oval.style.transform = 'rotate(0deg)'
    oval.style.width = '300px'
    oval.style.height = '200px'
}
function terangle() {
    let terangle = document.querySelector('#figure')
    terangle.style.borderRadius = '0'
    terangle.style.background = 'linear-gradient(to top right, green 50%, white 50%)'
    terangle.style.transform = 'rotate(135deg)'
    terangle.style.margin = '70px auto'
    terangle.style.width = '200px'
    terangle.style.height = '200px'
}