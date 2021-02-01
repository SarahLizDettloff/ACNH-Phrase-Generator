import React from 'react';

import '../styles/greeting.css';

var myArray = [
  "Sup, homeslice",
  "Alola!",
  "Another autograph?",
  "Ay, caramba!",
  "Be sure to subscribe!",
  "Beauty before age.",
  "BEHIND YOU! Just kidding!",
  "BEHOLD!",
  "Bet ya can't catch me!",
  "Bonjour.",
  "Boo-yah!",
  "C'est la vie",
  "C'mon, step it up!",
  "Can't stop, won't stop",
  "Celebrity here!",
  "Charmed, I'm sure.",
  "Check me out!",
  "Cowabunga!",
  "Crush it with your inner thighs!",
  "Crushed it!",
  "D'oh!",
  "Don't get cooked!",
  "Don't have a cow, man!",
  "Don't mind the sweat.",
  "Down low!",
  "Drop your hips! Reach for the sky!",
  "Eat my shorts!",
  "FALCON… PUNCH!",
  "Feel the burn?",
  "Fist bump!",
  "Get a job!'",
  "Get off my lawn!",
  "Get over here!",
  "Good to see ya!",
  "Gotta go fast!",
  "Grumble, grumble...",
  "Hadoken!",
  "High energy, move that body!",
  "Hit that subscribe button!	",
  "Hot stuff, coming through!",
  "I declare a thumb war!",
  "I see you have taste.",
  "I'm really feeling it!",
  "I'm too old for this...",
  "I'm walkin' here!",
  "Is it idle chit-chat time already?",
  "Is it lunchtime yet?",
  "Is that food I smell?",
  "It's ya boy!",
  "Jinkies!",
  "Let's get fired up!",
  "Like, share, and follow!",
  "Looking divine! Me, I mean.",
  "Lovely, aren't I?",
  "MAH BOI!",
  "Make this quick",
  "May the Force be with you.",
  "Oh, look. The circus has arrived.",
  "Qué pasa?",
  "Say fuzzy pickles!",
  "Show me your moves!",
  "Sun's out, guns out!",
  "That's like, your opinion...",
  "That's what you're wearing?",
  "Well, excuuuuse me, princess!",
  "Well, well, well...",
  "You got any snacks?",
  "You smell that?",
  "Give me all your bells",
  "Ça va?",
  "Your my boy, blue",
  "Step aside 4 the nightmare",
  "Don't get captured",
  "It's so Fluffy!",
  "Hold the mayo",
  "Stop the press!",
  "eww, it's you...",
  "Mmmmm nope",
  "Filthy peasant"
];

function generateGreeting() {
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  document.getElementById('greeting').innerHTML = randomItem;  
  
  
}

const Greeting = () => (
  <div class="greet">
    <div class="hGreetContainer">
        <h2 class="hGreet">Greeting</h2>
    </div>
    <div class="containerGreet">
      <button class="greetbutton" onClick={generateGreeting}>Generate</button>
      <p class="greetText" id='greeting'></p>
    </div> 
  </div>
  );

  export default Greeting;