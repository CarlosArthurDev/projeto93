
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyA_noWj4WMAISGpLwAZwoY6-aLnMjZLKHo",
  authDomain: "projeto47-6da27.firebaseapp.com",
  databaseURL: "https://projeto47-6da27-default-rtdb.firebaseio.com",
  projectId: "projeto47-6da27",
  storageBucket: "projeto47-6da27.appspot.com",
  messagingSenderId: "924633778898",
  appId: "1:924633778898:web:75d2be9f3ba7e9b10cbb0b"
};
firebase.InitializeApp(firebaseConfig)
  userName = localStorage.getItem("user");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
