const moodData = [
    {
      id: '1',
      category:'severe',
      images: [{img:require('../images/health-s.png'),id:3}, {img:require('../images/Music.png'),id:2}, {img:require('../images/Walk.png'),id:3}], 
      title: 'Blood Sugar Journal',
      mInd: require('../images/severe-mood.png'),
      comp:''
    },
    {
      id: '2',
      category:'not right',
      images: [{img:require('../images/Music.png'),id:1}, {img:require('../images/Bath.png'),id:2}, {img:require('../images/Journal.png'),id:3}, {img:require('../images/Walk.png'),id:4}],
      mInd: require('../images/not-alright.png'),
      title: 'My Progress',
      comp:''
    },
    {
      id: '3',
      category:'good',
      images: [{img:require('../images/yoga.png'),id:1}, {img:require('../images/be-prod.png'),id:2},{img:require('../images/power-walk.png'),id:3}],
      mInd: require('../images/awesome-mood.png'),
      title: 'Mood Board',
      comp:''
  
    },
    {
      id: '4',
      category:'awesome',
      images: [{img:require('../images/yoga.png'),id:1}, {img:require('../images/be-prod.png'),id:2},{img:require('../images/power-walk.png'),id:3}],
      mInd: require('../images/awesome-mood.png'),
      title: 'Neuro Sense',
      comp:''
  
    },
    
  ];
  
  export default moodData;
  