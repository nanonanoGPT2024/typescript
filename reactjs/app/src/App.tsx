import './App.css';
import Counter1 from "./components/redux/Counter1";

function App() {

  return (
    // <div>
    //   <Halo nama='bangsat'/>
    //   <Halo nama='nanonano' umur={23}/>
    //   <Counter />
    //   <InputForm />
    //   <UserList />
    // </div>


    // <Router>
    //   <nav>
    //     <Link to="/">Home</Link> | <Link to="/hallo">Hello world</Link> | <Link to="/counter">Counter</Link> | <Link to="/input-form">Input Form</Link> | <Link to="/fetch-api">Fetch API</Link>
    //   </nav>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/counter" element={<Counter />} />
    //     <Route path="/input-form" element={<InputForm />} />
    //     <Route path="/fetch-api" element={<UserList />} />
    //   </Routes>
    // </Router>

    <div>
      <h1>Redux Toolkit dengan Typescript</h1>
      <Counter1 />
    </div>
  )
}

export default App
