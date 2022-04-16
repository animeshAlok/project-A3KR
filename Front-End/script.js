var std=document.querySelector('.student')
var fal=document.querySelector('.faculty')
var abts=document.querySelector('.fake')

function student(){
    std.style.display="block"
    fal.style.display="none"
    abts.style.display="none"
}
function faculty(){
    std.style.display="none"
    fal.style.display="block"
    abts.style.display="none"
}
fetch('Person.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        facappendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function facappendData(data) {
    var mainContaint = document.querySelector(".faculty");
    var facdiv=document.createElement("div");
    facdiv.className="facins"
    mainContaint.appendChild(facdiv);
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.setAttribute('class','insert');
        div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
        facdiv.appendChild(div);
    }
}