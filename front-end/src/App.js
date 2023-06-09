import { Form, Data } from './style'
import { Chart } from 'react-google-charts'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const options = {
  pieHole: 0.4,
  is3D: false,
}

function App() {
  const notify = () => toast.success('Cadastrado com Sucesso!')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [participation, setParticipation] = useState(0)
  const [username, setUsername] = useState([])
  const [data, setData] = useState([])

  function getInfos() {
    const promise = axios.get('http://localhost:5000/')
    promise.then((response) => {
      var result = []
      var header = [`'Nome'`, 'Participação']
      result.push(header)
      response.data.map((obj) => {
        result.push([
          `${obj.firstName} ${obj.lastName}`,
          parseInt(obj.participation),
        ])
      })
      setData(result)

      console.log(result)
    })
    promise.catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getInfos()
  }, [])

  function postUser(event) {
    event.preventDefault()

    const data = { firstName, lastName, participation }
    const promise = axios.post('http://localhost:5000/', data)
    promise.then((response) => {
      console.log(response)
      setFirstName('')
      setLastName('')
      setParticipation('')
      notify()
      getInfos()
    })
    promise.catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
      <Form onSubmit={postUser}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          value={participation}
          onChange={(e) => setParticipation(e.target.value)}
          placeholder="Participation"
          required
        />
        <button className="btn" type="submit">
          SEND
        </button>
        <ToastContainer />
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
        {username.map((user) => {
          return (
            <div className="table">
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
              <p>{user.participation}</p>
            </div>
          )
        })}
      </Data>
    </>
  )
}

export default App
