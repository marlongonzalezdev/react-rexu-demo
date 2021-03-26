import TaskList from "./components/taskList";
import store from './redux/store';
import { Provider } from 'react-redux';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <TaskList></TaskList>
    </Provider>
  );
}

export default App;
