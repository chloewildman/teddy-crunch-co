import {BrowserRouter as Router} from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <Router basename={import.meta.env.BASE_URL}>
      <App />
    </Router>
)
