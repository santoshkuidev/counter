import './App.css';
import { Provider } from 'react-redux';
import Counter from './counter';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
            <Counter/>
        </Provider>
    </div>
  );
}

export default App;
