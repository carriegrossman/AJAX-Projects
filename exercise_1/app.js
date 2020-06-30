const ajax = (url, callback) =>{
    const request = new XMLHttpRequest();

request.onreadystatechange =() => {
    if(request.readyState === 4 && request.status == 200){
        callback(request.response)

        let names = JSON.parse(request.response)
        let doc = document.querySelector("body")
        let newList = document.createElement('ul')
            doc.append(newList)







    }
};
request.open("GET", url);

request.send();

}
ajax("./starwars_names.json", (resp)=>console.log(JSON.parse(resp)))