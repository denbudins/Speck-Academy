var alat = ["Čekić", "Bušilica", "Guma", "Mač"];
var toolbox = [];

function popuniListu(){
    fLen = alat.length;
    text = "";
    for (i = 0; i < fLen; i++) {
        text += "<li id='"+ i +"' value='"+ i +"' onclick='dodajItem(this.id)'><a>" + alat[i] + "</a></li>";
    }
    document.getElementById("alat").innerHTML = text;
}

function dodajItem(id){
    var x = document.getElementById(id).value;
    toolbox.push(alat[x]);
    fLen = toolbox.length;
    toolbox.reverse();
    text = "";
    for (i = 0; i < fLen; i++) {
        text += "<li id='"+ i +"' value='"+ i +"' onclick='obrisiItem(this.id)'><a>" + toolbox[i] + "</a></li>";
    }
    document.getElementById("toolbox").innerHTML = text;
    toolbox.reverse();
}

function obrisiItem(id){
    var x = document.getElementById(id).value;
    toolbox.splice(x,1);
    fLen = toolbox.length;
    text = "";
    for (i = 0  ; i < fLen; i++) {
        text += "<li id='"+ i +"' value='"+ i +"' onclick='obrisiItem(this.id)'><a>" + toolbox[i] + "</a></li>";
    }
    document.getElementById("toolbox").innerHTML = text;
}