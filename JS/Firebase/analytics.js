 // Import the functions you need from the SDKs you need
 //import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
 //import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCoSxR4qkdQhHvvC6YIcRii2vsm8rtu0Vk",
   authDomain: "snap-booth-photos.firebaseapp.com",
   databaseURL: "https://snap-booth-photos-default-rtdb.firebaseio.com",
   projectId: "snap-booth-photos",
   storageBucket: "snap-booth-photos.appspot.com",
   messagingSenderId: "350438842610",
   appId: "1:350438842610:web:dc05af5e1b118c1e7b706b",
   measurementId: "G-BZW342QWVY"
 };
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();
 
 // Initialize Firebase
 //const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


function clickedHourly(){

  firebase.analytics().logEvent('HOURLY_INFORMATION_CLICKED');

}

function clickedInclusive(){

  firebase.analytics().logEvent('INCLUSIVE_INFORMATION_CLICKED');

}

function quoteFormStarted(placeInForm) {
  console.log(placeInForm)
  firebase.analytics().logEvent('COMPLETED_' + placeInForm + '_FORM_FIELD');

}


/* DETECTS WHEN A USER HAS SCROLLED MORE THAN HALF WAY DOWN A PAGE AND RECORDS [1] EVENT WHEN THEY'VE SCROLLED */

let scrolling = false;
let notScrolled = true;
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

window.onscroll = function(event) {

  if(notScrolled)
  {
    scrolling = true;
  }

setInterval(() => {
    if (scrolling) {
        scrolling = false;
        // place the scroll handling logic here
        if(winWidth < 800 & window.pageYOffset>(winHeight / 2) )
        {
          firebase.analytics().logEvent(this.document.title + '_MOBILE_ENGAGED_SCROLL');
          //console.log("scroll test works")
          notScrolled = false;
        }

        
    }
},600);

};


/* ENDS SCROLLING DETECTIONS AND EVENT LOGGING*/
