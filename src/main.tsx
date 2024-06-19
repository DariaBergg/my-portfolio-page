import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './App.tsx';
import './index.css';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <HashRouter>
      <App />
    </HashRouter>,
  );
}
