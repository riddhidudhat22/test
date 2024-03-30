
import { Provider } from 'react-redux';
import './App.css';
import Counter from './Counter/Counter';
import { configstore } from './redux/Store';

function App() {
  const store=configstore()
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
}

export default App;
