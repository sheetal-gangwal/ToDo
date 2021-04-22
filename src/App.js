import { Container } from 'semantic-ui-react';
import Header from './layout/header';
import MainPanel from './layout/main-section';
import SubHeader from './layout/sub-header';

function App() {
  return (
    <div className='App'>
      <Container>
        <Header />
        <SubHeader />
        <MainPanel />
      </Container>
    </div>
  );
}

export default App;
