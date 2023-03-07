

interface Task {
  id?: number
  text: string
  day: string
  completed: boolean

}



const TASKS: Task[] = [
  {
    id: 1,
    text: "Online class",
    day: "May 1th at 2:30pm",
    completed: true,
  },
  {
    "id": 2,
    "text": "Online exam",
    "day": "May 1th at 4:30pm",
    "completed": true
  },
  {
    "id": 3,
    "text": "English practice",
    "day": "April 1th at 2:30pm",
    "completed": false
  }
]


export default TASKS

export { Task }