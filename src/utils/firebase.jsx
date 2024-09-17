// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBc1Ysw1TmqqdQq3M_VRUilB8meVV6Cv4",
  authDomain: "netflix-gpt-e36a5.firebaseapp.com",
  projectId: "netflix-gpt-e36a5",
  storageBucket: "netflix-gpt-e36a5.appspot.com",
  messagingSenderId: "440083585976",
  appId: "1:440083585976:web:eaed5b438d2223220acd4d",
  measurementId: "G-NHGPE5FZ0L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// Export the auth instance
export { auth, analytics }; // Export 'auth' and 'analytics' if needed
