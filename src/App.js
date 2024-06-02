import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClcik from './components/FunctionClick';
import ClassClick from './components/ClassClcik';
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import ImportModel from './components/ImportModel';
import MyPage from './pages/MyPage';
import Parent from './context/Parent';
import CounterOne from './reducer/CounterOne';




function App() {
  return (
    <div className="App">
      {/* <MyPage/> */}

      {/* <NameList/> */}
      {/* <Hello name = "Suvit" heroName = "Amir Khan " > <button>Click </button></Hello>
      <Hello name = "Dev" heroName = "CSGO PLayer "> <span>Deepak</span>  </Hello>
      <Hello name = "Nikita" heroName = "Kaitrina Kaif">
        <p>You are going to........ </p>
      </Hello> */}
      {/* <Message/>
      <Counter/>

      <FunctionClcik/>
      <ClassClick/> */}

      {/* <ParentComponent/>

      <Form/>
      <LifeCycleA/>

      <ImportModel/> */}
      {/* <Parent></Parent> */}
      <CounterOne></CounterOne>
    </div>
  );
}


export default App;
