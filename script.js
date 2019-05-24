function envoiRequete()
{
    $requete = new XMLHttpRequest();
    $requete.open("get","https://api.chucknorris.io/jokes/random",true);
    $requete.onload = receptionReponse;
    $requete.send();
}

function receptionReponse()
{
    var info = JSON.parse(this.responseText);
    document.getElementById("maDiv").innerText = info.value;
}