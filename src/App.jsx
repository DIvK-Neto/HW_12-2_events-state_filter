import { Portfolio } from './components/Portfolio/Portfolio';
import { projectsData } from './data';
import './App.css';

function App() {
  return (
    <div>
      <Portfolio projects={projectsData} />
    </div>
  );
}

export default App;
