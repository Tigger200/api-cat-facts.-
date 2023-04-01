let fact = document.getElementById('fact')
fetch('https://openwhyd.github.io/openwhyd/API#openwhyd-data-export-api')
    .then(response => response.json())
    .then(data => {
        fact.innerText = data[4].innerText
    })