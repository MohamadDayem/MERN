import MyNewComponent from './components/MyNewComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNewComponent firstName = {"Kareem"} lastName={"Taha"} age = {25} hairColor={"bold"} />
        <MyNewComponent firstName = {"enzo"} lastName={"dayem"} age = {25} hairColor={"bold"} />
        <MyNewComponent firstName = {"muath"} lastName={"Taha"} age = {25} hairColor={"bold"} />
      </header>
    </div>
  );
}

export default App;
