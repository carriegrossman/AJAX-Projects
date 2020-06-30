const request = new XMLHttpRequest();

request.onreadystatechange =() => {
    if(request.readyState === 4 && request.status ===200){
        console.log(request.response)
        console.log(JSON.parse(request.response))

        let names = JSON.parse(request.response)
        let doc = document.querySelector("body")

        names.forEach(name => {
            let nameDom = document.createElement("div")
            nameDom.innerHTML = name.name;
            doc.append(nameDom)
        });
    }
};
//GET method is the same as doing opening a webpage (Http methods)
request.open("GET", "./starwars_names.json")
request.send();