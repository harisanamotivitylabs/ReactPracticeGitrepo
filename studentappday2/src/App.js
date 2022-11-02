
import './App.css';



import Header from './FunctionBasedComponents/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import StudentRegister from './FunctionBasedComponents/StudentRegister';
function App() {
  return (
    <div className="App">
      <Header/>
   <StudentRegister/>
    </div>
  );
}

export default App;
