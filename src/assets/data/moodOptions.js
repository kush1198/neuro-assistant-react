const moodData = [
    {
      id: '1',
      category:'severe',
      images: [{img:require('../images/Music.png'),id:1}, {img:require('../images/Journal.png'),id:2}],
      title: 'Blood Sugar Journal',
      mInd: require('../images/mood_indication.png'),
      comp:''
    },
    {
      id: '2',
      category:'not right',
      images: [{img:require('../images/Bath.png'),id:1}, {img:require('../images/Walk.png'),id:2}],
      mInd: '../images/mood_indication.png',
      title: 'My Progress',
      comp:''
    },
    {
      id: '3',
      category:'good',
      images: [require('../images/bloodS.png'), ],
      mInd: '../images/mood_indication.png',
      title: 'Mood Board',
      comp:''
  
    },
    {
      id: '4',
      category:'awesome',
      images: [require('../images/bloodS.png'), ],
      mInd: '../images/mood_indication.png',
      title: 'Neuro Sense',
      comp:''
  
    },
    
  ];
  
  export default moodData;
  