var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var to_Do = [

    'Make a coffe',
    'Study JS',
    'att my repository at github',
    'Go to shop'

]

function renderto_Do(){

    for(todo of to_Do){

        var to_DoElement = document.createElement('li')
        var to_DoText = document.createTextNode(todo)

        to_DoElement.appendChild(to_DoText)
        listElement.appendChild(to_DoElement)

    }
} 

renderto_Do()