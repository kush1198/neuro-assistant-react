import * as React from 'react';
import NeuroSenseComp from '../../components/NeuroSenseComp';
import gif from '../../assets/images/Object-Pickups.gif'
const HandsScreen4 = () => {
  return (<NeuroSenseComp
    title = '4. Object Pickups'
    nextScreen= 'Hands5'
    gif= {gif}
    repeat= '2 sets of 5 reps, 2 times a day'
    text = {['1. You would need coins, bottle caps, pencils, and/or other small objects on a table for this exercise.',
            '2. Pick up each object carefully, one by one, and place them on the other side of the table. Grasp each object with 2 fingers.',
            '3. Pick up each object again and return it to the starting position.']
          }
          >

            </NeuroSenseComp>)
};

export default HandsScreen4;

