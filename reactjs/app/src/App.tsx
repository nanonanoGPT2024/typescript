import './App.css'
import Counter from './components/Counter'
import Halo from './components/Hallo'
import InputForm from './components/InputForm'
import UserList from './components/UserList'

function App() {

  return (
    <div>
      <Halo nama='bangsat'/>
      <Halo nama='nanonano' umur={23}/>
      <Counter />
      <InputForm />
      <UserList />
    </div>
  )
}

export default App
