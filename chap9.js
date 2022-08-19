function loadXML() {
    const xmlhttp = new XMLHttpRequest()
    xmlhttp.open('GET', 'https://raw.githubusercontent.com/TangAndClear/JS-in-Easy-Steps/main/books.xml', true)
    xmlhttp.send()
    xmlhttp.onreadystatechange = function() {
        if( this.readyState == 4 && this.status == 200)
        getData(this)
    }
}

function getData(xml) {
    const xmlDoc = xml.responseXML
    const tags = xmlDoc.getElementsByTagName('book')
    let list = '', i = 0
    for( i = 0; i < tags.length; i++){
        list += '<li>' + tags[i].getElementsByTagName('title')[0].firstChild.data 
    }
    document.getElementById('list').innerHTML = list
}
