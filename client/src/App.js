import styled from 'styled-components';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

import { breakpoints } from './Theme';
const { sm, md, lg } = breakpoints;

const Main = styled.div``;

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Main>
        <Home />
        <Work />
        <Contact />
      </Main>
    </div>
  );
};

export default App;
