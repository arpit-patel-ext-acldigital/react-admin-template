import { BrowserRouter } from 'react-router-dom';
import Routes, { routes } from './routes';

const App = () => {
  return (
    <>
      <BrowserRouter >
        <Routes routes={routes}>
        </Routes>
      </BrowserRouter>
    </>);
};

export default App;
