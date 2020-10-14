var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var to_Do = JSON.parse(localStorage.getItem('listTo_Do')) || [];

function renderto_Do(){

    listElement.innerHTML = ''

    for(todo of to_Do){

        var to_DoElement = document.createElement('li')
        var pharp = document.createElement('span')
        var to_DoText = document.createTextNode(todo);
        pharp.appendChild(to_DoText)
        var pos = to_Do.indexOf(todo);
        
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode(' / Erase');
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'deleteTo_Do(' + pos + ')');

        linkElement.appendChild(linkText);

        //to_DoElement.appendChild(to_DoText);
        to_DoElement.appendChild(pharp)
        to_DoElement.appendChild(linkElement);
        listElement.appendChild(to_DoElement);
        

    }
}

function addTo_Do(){

    var text = inputElement.value;
    inputElement.value = '';
    to_Do.push(text);
    renderto_Do();
    saveToStorage();

}

function deleteTo_Do(pos){

    to_Do.splice(pos, 1);
    renderto_Do();
    saveToStorage();

}


function saveToStorage(){

    
    localStorage.setItem('listTo_Do', JSON.stringify(to_Do));

}



renderto_Do()

buttonElement.onclick = addTo_Do;

var el = document.querySelectorAll('span')
el.forEach( x => {

    x.style.cursor = 'pointer'
    x.addEventListener('click', event => {

        if(x.style.textDecoration === ''){
            x.style.textDecoration = 'line-through'
        } else {
            x.style.textDecoration = ''
        }
    })

})