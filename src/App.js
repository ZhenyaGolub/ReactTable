import { Table } from "./components/Table";

const data = require('./data/data.json');
const data2 = require('./data/data2.json');

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Table dataUrl={data}/>
        <Table dataUrl={data2}/>
      </div>
    </div>
  );
}

export default App;
