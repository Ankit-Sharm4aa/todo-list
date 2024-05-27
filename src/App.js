import logo from './logo.svg';
import './App.css';
import heading from './components/heading';
import addTask from './components/add-task';

function App() {
  return (
    <div className="App">
      <div className='heading'>{heading}</div>
      <div className='add-task'>{addTask}</div>
      <hr className='break-line'/>
    </div>
  );
}

export default App;
