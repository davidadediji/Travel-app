import './index.css';
import Header from './components/Header';
import Card from './components/Card';
import {data} from './model'


function App() {
  return (
    <div className="container">
        <Header/>
        <Card cards = {data}/>
    </div>
  );
}

export default App;
