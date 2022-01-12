import firebase from 'firebase';

// add SDK Firebase

 const firebaseConfig = {
        apiKey: "AIzaSyAOPixSdev64eq1RXNZRYeUHy3yy6lkOTM",
        authDomain: "project-45bfd.firebaseapp.com",
        projectId: "project-45bfd",
        storageBucket: "project-45bfd.appspot.com",
        messagingSenderId: "173033065318",
        appId: "1:173033065318:web:344c9d6ab9a52b03bd16a7",
        measurementId: "G-BZS6VS8YBS"
 };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();