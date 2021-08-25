function Load() {
    var getName = localStorage.getItem("Username");
    document.getElementById("DisplayName").innerHTML = "Welcome " + getName;
}

function Logout() {
    localStorage.removeItem("Username");
    window.location = "indexTwo.html";

}



function AddRoom() {
    room_name = document.getElementById("AddRoom").value;
    localStorage.setItem("RoomName", room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose: "Adding Room"
    });
}

var firebaseConfig = {
    apiKey: "AIzaSyBsUbqd-AvLfsqeh7807vzSJHY7VCJw22A",
    authDomain: "kwitter-37100.firebaseapp.com",
    databaseURL: "https://kwitter-37100-default-rtdb.firebaseio.com",
    projectId: "kwitter-37100",
    storageBucket: "kwitter-37100.appspot.com",
    messagingSenderId: "160042861520",
    appId: "1:160042861520:web:0b9cf3eb8b9105d0ab2fd5",
    measurementId: "G-7M4P12S10S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            roomName = childKey;
            //Start code
            row = "<div class='room_Name' id=" + roomName + " onclick='redirectToRoomName(this.id)'>#" + roomName + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });

}
getData();





function redirectToRoomName(name) {
    console.log(name);
    window.location = "Kwitter_page.html";
}