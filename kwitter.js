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


function AddUser() {
    var Value = document.getElementById("Login").value;
    localStorage.setItem("Username", Value);
    window.location = "kwitter_room.html"
}