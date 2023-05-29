import { Form, Data } from './style'
import { Chart } from 'react-google-charts'
import axios from 'axios'
import { useState } from 'react'

export const data = [
  ['Task', 'Hours per Day'],
  ['Work', 11],
  ['Eat', 2],
  ['Commute', 2],
  ['Watch TV', 2],
  ['Sleep', 7],
]

export const options = {
  title: 'My Daily Activities',
  pieHole: 0.4,
  is3D: false,
}

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [participation, setParticipation] = useState(0);

  function postUser(event){
    event.preventDefault();

    const data = {firstName, lastName, participation};
    const promise = axios.post('http://localhost:5000/', data);
    promise.then((response) => {
      console.log(response)
      setFirstName("");
      setLastName("");
      setParticipation("");
    });
    promise.catch((error) => {
      console.log(error)
    })

  }

  return (
    <>
      <Form onSubmit={postUser}>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
        <input type="text" value={participation} onChange={(e) => setParticipation(e.target.value)} placeholder="Participation" required />
        <button type="submit">SEND</button>
      </Form>
      <Data>
        <h1>DATA</h1>
        <h2>
          Insira seu primeiro nome, segundo nome e % de participação para ver o
          gráfico.
        </h2>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={'100%'}
          height={'400px'}
        />
      </Data>
    </>
  )
}

export default App
