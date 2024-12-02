const firebaseConfig = {
  apiKey: "AIzaSyBMDTAYpyTVpXuJ7WZYe4k4ST1nOz214sw",
  authDomain: "database225-beea1.firebaseapp.com",
  projectId: "database225-beea1",
  storageBucket: "database225-beea1.firebasestorage.app",
  messagingSenderId: "417526537882",
  appId: "1:417526537882:web:78bfc0c1be09ce7f42c923",
  measurementId: "G-PF89NZ4ZL4"
};

// Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebaseApp.auth();
  var provider = new firebase.auth.GoogleAuthProvider();



function login() {
  auth
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    window.location.href = "../dashboard.html";
    console.log(user);
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(errorMessage);
    // ...
  });

  
  /*console.log("Login function called");
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  if (username === "user" && password === "password") {
    // Redirect to the dashboard page
    window.location.href = "../dashboard.html";
  } else {
    alert("Incorrect username or password.");
  }*/
}