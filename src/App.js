import React from 'react';
import { TopBar } from './components/topBar/topBar';
import { Footer } from './components/footer/footer';
import { PostGrid } from './components/postGrid/postGrid';
import './App.css';


class App extends React.Component {


render() {

  return (
    <div className="App" id='main'>
      <TopBar />

      <PostGrid />


      <Footer />
    </div>
  );
}
}

export default App;
