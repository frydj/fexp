/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
import './content.css';
import { FlureeWrapper } from './flureedb/FlureeContext';
import Explorer from './components/Explorer/Explorer';
import Drawer from './components/Drawer/Drawer';
class Main extends React.Component {
  render() {
    return (
      <>
        <FlureeWrapper>
          {/* <Explorer /> */}
          <Drawer />
        </FlureeWrapper>
      </>
    );
  }
}

const app = document.createElement('div');
app.id = 'fexp-root';
document.body.appendChild(app);
ReactDOM.render(<Main />, app);
