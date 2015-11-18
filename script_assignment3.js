//Private key: s2d4qtifs API key: RhwcuGiRP
var myRequest = new XMLHttpRequest();
var query = "alchemy";
var method = "GET";
var url = "http://www.europeana.eu/api/v2/search.json?wskey=RhwcuGiRP&query=" + query + "&start=1&rows=24&profile=standard";

myRequest.open(method, url);
myRequest.send();
            
console.log(document);
    myRequest.onreadystatechange = function(){
        if (myRequest.readyState === 4) {
            //console.log(myRequest.response);
            var data = myRequest.response;
            var dataParsed = JSON.parse(data);

        var ul = document.createElement('ul');
        document.body.appendChild(ul);

        for(var i= 0; i< dataParsed.items.length; i++){
            //Loop  has to irrerate over the dataParsed to locate  edmPreview' content, which are the image URLs
            console.log(dataParsed.items[i].edmPreview);
            //Eventough console recognizes the URLs, they're undefined so I don't know what the images look like
            //Also they are listed as undefined, I wasn't able to fix this, but i think it has something to do with the parsing
        }
        var array = dataParsed.items.map(function(obj){ 
            var li = document.createElement('li');
            li.innerHTML = obj.name;
            ul.appendChild(li);
        
        });    
        }
    };