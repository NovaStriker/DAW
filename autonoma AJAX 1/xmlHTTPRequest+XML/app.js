var http_request = false;

/*-----------------------*/

var parXML;

if(window.DOMParser){
    parXML=function(str){
        return(new window.DOMParser()).parseFromString(xmlStr, "text/xml");
    };
}

else if (typeof window.ActiveXObject != "undefined" && new window.ActiveXObject("Microsoft.XMLDOM")) {
    parXML=function(str){
        var doc = new window.ActiveXObject("Microsoft.XMLDOM");
        doc.async = "false";
        doc.loadXML(str);
        return doc;
    };
}

else{
    parXML=function(){
        return null;
    }
}

/*-------------------------*/

function makeRequest(url) {


    http_request = false;

    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/plain');
            // Ver nota sobre esta linea al final
        }

    } else if (window.ActiveXObject) { // IE
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }

    if (!http_request) {
        alert('Falla :( No es posible crear una instancia XMLHTTP');
        return false;
    }
    http_request.onreadystatechange = alertContents;
    http_request.open('GET', url, true);
    http_request.send(null);

}

function alertContents() {
    if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            /*Aquí deben procesar el archivo y cargar la información en el contenedor especificado*/

            let lista = document.getElementById("lista-canciones")
            cancion = parXML(http_request.responseText)
            console.log(cancion)
            canciones = cancion.getElementByTagName("root")[0].getElementByTagName("canciones")[0].getElementByTagName("cancion")
            lista.innerHTML=""
            for (var i = 0; i < canciones.length; i++) {
                lista.innerHTML += canciones[i].getAttribute("titulo")+"<br/>"
            }

        } else {
            alert('Hubo problemas con la petición.');
        }
    }
}

window.onload = function() {
    var link = document.getElementById('requerimiento');
    link.onclick = function() {
        makeRequest('datos.xml');
    }
}
