

interface Quote {
  id?: number
  quote_author: string
  quote_text: string
  created_at?: number
  modified_at?: number
}
interface Task {
  id : number
  
}


const Quotes: Quote[] = [
  {
    "id": 0,
    "quote_author": "Pritam",
    "quote_text": "All is well",
  },
  {
    "id": 1,
    "quote_author": "Pritam 1",
    "quote_text": "All is well 1",
  },
  {
    "id": 2,
    "quote_author": "Pritam",
    "quote_text": "All is well",
  },
]


export default Quotes

export { Quote }