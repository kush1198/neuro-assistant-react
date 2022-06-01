import * as React from 'react';
import NeuroSenseComp from '../../components/NeuroSenseComp';
import gif from '../../assets/images/Tendon-Gliding.gif'
export default HandsScreen3 = () => {
  return (<NeuroSenseComp
    title = '3. Tendon Gliding'
    nextScreen= 'Hands4'
    gif= {gif}
    repeat= '2 sets of 6 reps, 3 times a day'
    text = {['1. Fan out (stretch) your fingers as much as you can. Stretch your palm a little. This is the starting position.',
            '2. Bend all your fingers except your thumb and touch the bottom of your palm.',
            '3. Extend your fingers slowly, one section at a time, to return to the straight starting position.',
            '4. Again, bend all your fingers except your thumb and touch the middle of your palm.',
            '5. Bring your fingers back to the starting position.',
            '6. Touch all your fingertips with the tip of your thumb.',
            '7. Again, spread your fingers out and stretch them as much as you can.',
            '8. Finally, touch the base of each finger with your thumb.']
          }
          >

            </NeuroSenseComp>)
};

