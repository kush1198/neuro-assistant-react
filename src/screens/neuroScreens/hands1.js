import * as React from 'react';
import NeuroSenseComp from '../../components/NeuroSenseComp';
import gif from '../../assets/images/Hands1GIF.gif'
export default HandsScreen1 = (navigation) => {
  return (<NeuroSenseComp
    title = '1. Finger Extensors'
    nextScreen= 'Hands2'
    gif= {gif}
    repeat= '2 sets of 6 reps, 3 times a day'
    text = {['1. Keep your hand flat on a solid surface.',
            '2. Hold the affected finger with the index finger of the other hand.',
            '3. Gently and slowly, pull the finger upward, keeping your finger as straight as possible and your palm flat.',
            '4. Pull it as far as you can without pain.',
            '5. Hold it for 5 seconds and then release.',
            '6. Do this for the other 4 fingers.']
          }
          >

    </NeuroSenseComp>)
};