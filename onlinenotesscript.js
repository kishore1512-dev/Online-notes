var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
popupoverlay.style.display="block"
popupbox.style.display="block"
})
 

var cancelnotesid =  document.getElementById("cancel-notes-id")

cancelnotesid.addEventListener("click",function(event){
  event.preventDefault()
  popupoverlay.style.display="none"
  popupbox.style.display="none"
})


var container=document.querySelector(".container")
var addnotesid=document.getElementById("add-notes-id")
var popuptitle=document.getElementById("popup-title")
var popupsubhead=document.getElementById("popup-subhead")
var popupdes=document.getElementById("popup-des")

addnotesid.addEventListener("click",function(event){
event.preventDefault()
var div=document.createElement("div")
div.setAttribute("class","book-container")
div.innerHTML=`<h2>${popuptitle.value}</h2>
             <h3>${popupsubhead.value}</h3>
             <p>${popupdes.value}</p>
             <button onclick="deletenote(event)">Delete</button>`
container.append(div)
popupoverlay.style.display="none"
popupbox.style.display="none"
popuptitle.value = ""
popupsubhead.value = ""
popupdes.value = ""
})

function deletenote(event){
event.target.parentElement.remove()
}


