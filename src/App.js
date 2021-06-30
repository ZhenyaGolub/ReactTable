import { Fragment } from 'react';
import { Table } from "./components/Table";
import { Header } from "./components/Header";

import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

const data = require('./data/data.json');
const data2 = require('./data/data2.json');

const App = () => {

  return (
    <div className="app">
      <ScrollSync>
        <Fragment>
        <ScrollSyncPane>
        <Header headers={data2.columns}/>
        </ScrollSyncPane>
        <ScrollSyncPane>
        <div className="container">
            <Table dataUrl={data2} />
          </div>
        </ScrollSyncPane>
        </Fragment>
        </ScrollSync>
    </div>
  );
}

export default App;
