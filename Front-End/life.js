var fachead=document.querySelector('#head1');
var stdhead=document.querySelector('#head2');
var facbutt=document.querySelector('#faclog');
var stdbutt=document.querySelector('#stdlog');
var facht=document.querySelector('#fac');
var stdht=document.querySelector('#std');
function facin(){
    fachead.style.display="block";
    stdhead.style.display="none";
    facbutt.style.display="none";
    stdbutt.style.display="block";
    facht.style.display="block";
    stdht.style.display="none";
}
function stdin(){
    fachead.style.display="none";
    stdhead.style.display="block";
    facbutt.style.display="block";
    stdbutt.style.display="none";
    facht.style.display="none";
    stdht.style.display="block";
}
var quotes1=document.querySelector('#quoat1')
var quotes2=document.querySelector('#quoat2')
var quotes3=document.querySelector('#quoat3')
var auth1=document.querySelector('#author1')
var auth2=document.querySelector('#author2')
var auth3=document.querySelector('#author3')

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    quotes1.innerText = data[Math.floor(Math.random()*1643)].text
    quotes2.innerText = data[Math.floor(Math.random()*1643)].text
    quotes3.innerText = data[Math.floor(Math.random()*1643)].text
    auth1.innerText = data[Math.floor(Math.random()*1643)].author
    auth2.innerText = data[Math.floor(Math.random()*1643)].author
    auth3.innerText = data[Math.floor(Math.random()*1643)].author
    // console.log(data[Math.floor(Math.random()*1643)]);
    // console.log(dMath.flata[oor(Math.random()*1643)]);
    // console.log(data[Math.floor(Math.random()*1643)]);
  });
// console.log(Math.floor(Math.random()*1643));