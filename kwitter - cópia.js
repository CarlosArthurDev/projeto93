var getname;
function addUser(){
  getname=document.getElementById("userName").value;
  localStorage.setItem("user",getname);
  window.location="kwitterRoom.html";

}