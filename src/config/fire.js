import firebase from "firebase"

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCAbJRX7YHo42xCuY4shPrH2hpYPQdNODg",
  authDomain: "sfp-react.firebaseapp.com",
  databaseURL: "https://sfp-react.firebaseio.com",
  projectId: "sfp-react",
  storageBucket: "",
  messagingSenderId: "656709548882"
}

const fire = firebase.initializeApp(config)

export default fire
