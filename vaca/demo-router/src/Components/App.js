//import Home from './home/Home';
import React from 'react';
import { element } from 'prop-types';
import './App.css'
import Header from '../shared/layout/Header';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';

function App(props) {
  return (
    <div className="App">
      <Header title='Routing' url='https://i.blogs.es/e8941d/one-piece/1366_2000.jpg'/>
      <Content>
        {props.children}
      </Content>
      <Footer />
    </div>
  );
}

App.prototype = {
  children: element
}

export default App;
