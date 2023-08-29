import logo from './logo.svg';
import './App.css';
import Counter from './counter.jsx'
import TodoList from './todolist.jsx'

function App() {
  return (
    <>
    <h1>Welcome</h1>
    <Counter x={50}></Counter>
    <Counter x={10}></Counter>
    <TodoList ar={['get clothes','buy shoes','book tickets']}></TodoList>
    </>
  )
}

export default App;
