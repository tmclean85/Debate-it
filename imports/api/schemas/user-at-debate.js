export const UserAtDebate = new Mongo.Collection('userAtDebate');

export const userAtDebateInit = [
  {
    user_id: '3',
    debate_id: '1',
    confByYes: true, 
    confByNo: true, 
    attended: true,
    vote: false, 
    because: 'Yes because hfjklhj lhgjlkrh jlr', 
    goodPointsYes: 3,
    goodPointsNo: 2
  },
  {
    user_id: '4',
    debate_id: '1',
    confByYes: true, 
    confByNo: true,
    attended: true,
    vote: true, 
    because: 'Yes because jfklh fjkl hfjkl', 
    goodPointsYes: 3,
    goodPointsNo: 2
  },
  {
    user_id: '5',
    debate_id: '1',
    confByYes: false, 
    confByNo: true,
    attended: true,
    vote: false, 
    because: 'jlhfjl hfjl hfjlkhj l', 
    goodPointsYes: 3,
    goodPointsNo: 2
  },
  {
    user_id: '3',
    debate_id: '1',
    confByYes: true, 
    confByNo: true,
    attended: true,
    vote: true,
    because: 'Because fkls hjhjhjl hjk l', 
    goodPointsYes: 3,
    goodPointsNo: 2
  },
  {
    user_id: '4',
    debate_id: '2',
    confByYes: true, 
    confByNo: true,
    attended: true,
    vote: null, 
    because: 'What a mess!', 
    goodPointsYes: 0,
    goodPointsNo: 0
  },
  {
    user_id: '5',
    debate_id: '3',
    confByYes: false, 
    confByNo: true, 
    attended: false,
    vote: null, 
    because: '', 
    goodPointsYes: 0,
    goodPointsNo: 0
  }
]
