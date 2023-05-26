import { Form, Data } from './style'
import { Chart } from 'react-google-charts'

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
  return (
    <>
      <Form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Participation" />
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
