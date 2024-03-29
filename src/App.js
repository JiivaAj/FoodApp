import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap';
import './App.css';

import AppBar from './component/AppBar';
import Banner from './component/Banner';
import Menu from './component/Menu';
import PickoftheWeek from './component/PickoftheWeek';
import Comments from './component/Comments';

function App() {
  return (
    <>
      <AppBar/>
      <Banner/>
      <Menu/>
      <PickoftheWeek/>
      <Comments/>
      <div className='text-center my-3 text-primary small'>Copyright 2024-2025</div>
   </>
  );
 
}

export default App;
