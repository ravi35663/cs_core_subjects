import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import store from './store/index.js';
import { Provider } from 'react-redux';

/*
  createRoot:
  - Creates a root where the React app will be rendered
  - This is part of React 18's new rendering API
*/
createRoot(document.getElementById('root')).render(
  /*
    StrictMode:
    - Helps detect potential problems in development
    - Runs some lifecycle methods twice (only in dev)
    - Does NOT affect production
  */
  <StrictMode>

    {/*     
      Provider:
      - Makes the Redux store available to all components
      - Any component inside can access Redux state and dispatch actions */
    }
    
    <Provider store={store}>

        {/* App:
        - Root component of the application
        - All other components are rendered inside App */}
      <App />

    </Provider>
  </StrictMode>
);
