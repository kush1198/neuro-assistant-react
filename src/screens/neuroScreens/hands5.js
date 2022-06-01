import * as React from 'react';
import NeuroSenseComp from '../../components/NeuroSenseComp';
import gif from '../../assets/images/Palm-Presses.gif'
const HandsScreen5 = () => {
  return (<NeuroSenseComp
    title = '5. Palm Presses'
    nextScreen= ''
    gif= {gif}
    repeat= '3 sets of 12 reps, 3 times a day'
    text = {['1. You would need a small softball for this exercise.',
            '2. Place the ball in your palm with your fingers fanned out.',
            '3. You may support your hand by placing it on a table.',
            '4. Bring your fingers closer and grasp the ball.',
            '5. Squeeze and hold for 3 seconds.',
            '6. Release the hold and fan out your fingers as straight as you can, without moving your wrist.']
          }
          >

            </NeuroSenseComp>)
};

export default HandsScreen5;

