function Logout() {
    localStorage.removeItem("Username");
    window.location = "indexTwo.html";
}

function updateLike(message_id) {
    button_id = message_id;
    console.log(message_id);
    likes = document.getElementById(button_id).value;
    updatedLikes = Number(like) + 1;


    firebase.database().ref(room_name).child(message_id).update({
        like: updatedLikes
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


firebase.initializeApp(firebaseConfig);


username = localStorage.getItem("Username");
room_name = localStorage.getItem("RoomName");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: username,
        message: msg,
        like: 0
    });

    document.getElementById("msg").value = "";
}



function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];
                name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'>";
                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                row = name_with_tag + message_with_tag + like_button + span_with_tag;
                document.getElementById("output").innerHTML += row;
            }
        });
    });
}
getData();