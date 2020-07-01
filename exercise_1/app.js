const addNames=(response) =>{
    console.log(JSON.parse(response))

        let names = JSON.parse(response)
        let doc = document.querySelector("body")
        let list = document.createElement("ul")
        doc.append(list)
        names.forEach(name => {
            let listItems = document.createElement("li")
            list.append(listItems)
            listItems.append(name.name)
            
            let details = document.createElement("div")
            details.append(name.eye_color, name.height, name.mass)
            listItems.append(details)

        });
        
}
const request = new XMLHttpRequest();

request.onreadystatechange =() => {
    if(request.readyState === 4 && request.status ===200){
        addNames(request.response)

    }
};
request.open("GET", "./starwars_names.json");
request.send();