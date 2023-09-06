import logo from './logo.svg';
import './App.css';
import Counter from './counter.jsx'
import TodoList from './todolist.jsx'

function App() {
  return (
    <>
    <h1>Welcome</h1>
    {/* <Counter x={50}></Counter>
    <Counter x={10}></Counter> */}
    <TodoList title={"Todo"} id={"inp1"} ar={['get clothes','buy shoes','book tickets']}></TodoList>
    <TodoList title={"convo"} id={"inp2"} ar={['pack bags']}></TodoList>
    </>
  )
}

export default App;
