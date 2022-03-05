
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
var message = {}
var name = {}
//GET USER NAME
function getName() {
    name.username = prompt("Name (min 4 characters)")
    if (name.username.length >= 4) { 
        return false;
    } else {
        return getName();
    }
}
getName()
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const input = document.querySelector("#messageField")

document.addEventListener('keydown', function (event) {
    console.log(event.key)
    writeUserData()
})


input.addEventListener("click", function () { 
    message.text = prompt("Enter your message:")
})
button.addEventListener('click', function (event) {
    writeUserData()
})
function writeUserData() {
    console.log("clicked")
    if (message.text.length > 0) {
        set(ref(db, 'messages/' + "message"), {
            messageText: message.text,
            from: name.username
        });
    } else { 
       return message.text = prompt("Enter your message:")
    }
    }
var starCountRef = "";
starCountRef = ref(db, 'messages/')
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data)
    var html = "";
    html += "<h2 id='message' class=" + message.text + ">";
        html += "<div class='sender'>" + data.message.from + "</div><div class='mess'>|" + data.message.messageText
        if (data.message.from == name.username) { 
            html += "   ~by you~</div>"
        }
    html += "</h2><hr>";
    document.getElementById('messages').innerHTML += html;

    });
