/*      Promisses (códigos que não influenciam na linha do tempo)     */

var minhaPromisse = function() {

    return new Promisse(function(resolve, reject){

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/SylarK');
        xhr.send(null);

        xhr.onreadystatechange = function() {

            if(xhr.readyState === 4){

                if(xhr.status === 200){

                    resolve(JSON.parse(xhr.responseText))

                } else {

                    reject('Error')

                }

            }

        }

    })

}

minhaPromisse()
    .then(function(responde){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    })