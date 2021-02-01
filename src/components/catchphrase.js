import React from 'react';

import '../styles/catchphrase.css';

var myArray = [
  'Unworthy', 'Too soon', 'Stop that', 'Bad news', 'Smallfry', 'Good enough', 'Whatever', 'Road rage', 'Big mistake', 'Called it', 'No way', 'Trashy', 'Stay down', 'Unlikely', "Time's up", 'Stranger', 'Staff only', 'Savage', 'Go away', 'Eat this', 'Calm down', 'At least', 'Giddy up', 'Go get it', 'Nice try', 'Red alert', 'Hands down', 'Get down', 'Your turn', 'Pick it up', 'Give it to me', 'Bring it on', 'To battle', 'Nap time', 'Peace out', 'So far', 'Not yet', 'Wait for it', 'Feed me', 'What now', 'Bada-bing', 'Too late', 'For honor', 'Easy money', 'Fancy pants', 'Say no more', 'True story', 'Objection', 'Checkmate', 'Your grace', 'Seriously', 'Mortifying', 'My friend', 'Have mercy', 'Hear me out', 'Why i never', 'To the max', 'Kablam', 'Party hard', 'Just for you', 'Sickening', 'Count on me', 'For sure', 'With nuts', 'In my closet', 'Hammer time', 'Call 911', 'Aye matey', 'Beam me up', 'One fine day', 'Epic fail', 'Be my guest', 'What a mess', 'Good grief', 'Under my fins', 'My lord', 'You know', 'My breath smells', 'Hear me now', 'Cha-ching', 'For real'
];

function generatePhrase() {
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  document.getElementById('catchphrase').innerHTML = randomItem;  
  
}

const Catchphrase = () => (
    <div class="phrase">
      <div class="hPhraseContainer">
        <h2 class="hPhrase">Catchphrase</h2>
      </div>
      <div class="containerPhrase">
        <button class="catchbutton" onClick={generatePhrase}>Generate</button>
        <p class="catchphraseText" id='catchphrase'></p>
      </div> 
    </div>
  );

  export default Catchphrase;