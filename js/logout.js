/*const firebaseConfig = {
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
    var provider = new firebase.auth.GoogleAuthProvider();*/

function logout() {
    //localStorage.removeItem("isLoggedIn"); // Remove login flag from localStorage
    // save the stuff in localStroage to the database
 console.log("logout function called");
    db.collection("bank").add({
      balance: parseFloat(localStorage.getItem("balance")),
      type: "Logout",
      history: JSON.parse(localStorage.getItem("transactions"))
    });


    window.location.href = "./login.html"; // Redirect to login page
  }