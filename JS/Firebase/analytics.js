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

function clickedCTA(){
  firebase.analytics().logEvent('LANDING_CTA_CLICKED');
}

function clickedHourly(){
  firebase.analytics().logEvent('HOURLY_INFORMATION_CLICKED');
}

function clickedInclusive(){
  firebase.analytics().logEvent('INCLUSIVE_INFORMATION_CLICKED');
}

function quoteFormStarted(placeInForm) {
  firebase.analytics().logEvent('COMPLETED_' + placeInForm + '_FORM_FIELD');
}


function requestedQuote () {
  firebase.analytics().logEvent('QUOTE_REQUESTED');
}

/* DETECTS WHEN A USER HAS SCROLLED MORE THAN HALF WAY DOWN A PAGE AND RECORDS [1] EVENT WHEN THEY'VE SCROLLED 

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

        //console.log(winHeight + " - " + window.pageYOffset + " = " + (winHeight - window.pageYOffset))
        
        //Mobile screens -> When user scrolls more than the page, consider them engaged and log an event
        if(winWidth < 800 & (winHeight - window.pageYOffset) < 0  )
        {
         firebase.analytics().logEvent(this.document.title + '_MOBILE_SCROLL');
         //console.log("scroll test works")
        notScrolled = false;
         //console.log(winHeight - window.pageYOffset)
        }
        //Web screens -> When user scrolls more than the page, consider them engaged and log an event
        else if(winWidth >= 800 & (winHeight - window.pageYOffset) < (winHeight - 75) )
        {
        firebase.analytics().logEvent(this.document.title + '_WEB_SCROLL');
        //console.log(winHeight - window.pageYOffset + "counting as engaged")
        notScrolled = false;
        }
    }
},600);
};
*/
/* ENDS SCROLLING DETECTIONS AND EVENT LOGGING*/


