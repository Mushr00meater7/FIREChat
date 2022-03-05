const button = document.querySelector('#submit');
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getDatabase, ref, onValue,  set } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCQtrc4SjmSqHgU_hcu8FrZKLRe9Ef_Nd0",
authDomain: "test1-9c9be.firebaseapp.com",
databaseURL: "https://test1-9c9be-default-rtdb.firebaseio.com/",
projectId: "test1-9c9be",
storageBucket: "test1-9c9be.appspot.com",
messagingSenderId: "297622662488",
appId: "1:297622662488:web:5ec08842b104d06cce492d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const input = document.querySelector("#messageField")
var name = prompt("Name")
var message = {}
input.addEventListener("click", function () { 
    message.text = prompt("Enter your message:")
})
button.addEventListener('click', function (event) {
    writeUserData()
})

function writeUserData() {
    console.log("clicked")
        set(ref(db, 'messages/' + "message"), {
            messageText: message.text,
            from : name
        });
    }
var starCountRef = "";
starCountRef = ref(db, 'messages/')
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data)
    var html = "";
    html += "<h2 id='message'>";
    html += "<div class='sender'>" + data.message.from +"</div><diiv class='mess'>|"+ data.message.messageText + "</div>"
    html += "</h2><hr>";
    document.getElementById('messages').innerHTML += html;

});