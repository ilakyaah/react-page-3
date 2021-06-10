 export const qBank = [
  {
      id:1,
    question:
     "Look at this series:2,1,(1/2),(1/4),... What number should come next?",
     checked: 'true',
      answers: [
            { 
                text: 'A) (1/3)',
                clicked: false
            },
            {
                text: 'B) (1/8)',
                clicked: true
            },
            {
                text: 'C) (2/8)',
                clicked: false
            },
            {
                text: 'D) (1/6)',
                clicked: false
            }
        ],
  },
  {
      id:2,
    question:
      "Look at this series:7,10,8,11,9,12,...What number should come next?",
      checked: 'false',
         answers: [
            { 
                text: 'A) 7',
                clicked: false
            },
            {
                text: 'B) 10',
                clicked: true
            },
            {
                text: 'C) 12',
                clicked: false
            },
            {
                text: 'D) 13',
                clicked: false
            }
        ],
  },
  {
      id:3,
    question:
      "Look at this series:36,34,30,28,24... What number should come next?",
      checked: 'false',
         answers: [
            { 
                text: 'A) 20',
                clicked: false
            },
            {
                text: 'B) 22',
                clicked: true
            },
            {
                text: 'C) 23',
                clicked: false
            },
            {
                text: 'D) 26',
                clicked: false
            }
        ],
  }
]

export const testList = [
    {
        list: "Test 1"
    },
    {
        list: "Test 2"
    },
    {
        list: "Java Interview"
    },
    {
        list: "Test 4"
    }
]

export const cardList=[
    {
        list: "Test 1",
        createdOn: "Created on May 30,2020",
        test: "Open",
        marks: "Total marks: 50",
        color: "red",
    },
      {
        list: "Test 2",
        createdOn: "Created on May 30,2020",
        test: "Closed",
        marks: "Total marks: 50",
        color: "green"
    },
      {
        list: "Developer Interview",
        createdOn: "Created on May 30,2020",
        test: "Open",
        marks: "Total marks: 50",
        color: "indigo"
    },
      {
        list: "Java Interview",
        createdOn: "Created on May 30,2020",
        test: "Closed",
        marks: "Total marks: 50",
        color: "yellow"
    }
]