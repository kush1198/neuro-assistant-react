import * as React from 'react';
import NeuroSenseComp from '../../components/NeuroSenseComp';
import gif from '../../assets/images/Finger-Lifts.gif'
export default HandsScreen2 = () => {
  return (<NeuroSenseComp
    title = '2. Finger Lifts'
    nextScreen= 'Hands3'
    gif= {gif}
    repeat= '2 sets of 6 reps, 3 times a day'
    text = {['1. Place your palm flat on a table.',
            '2. Lift your fingers (as far as possible) one by one. Keep your fingers straight and palm flat on the table.']
          }
          >
    </NeuroSenseComp>)
};

