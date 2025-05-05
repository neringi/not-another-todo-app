import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.tsx'
import TodosContextProvider from './contexts/TodosContextProvider.tsx';
import { KindeProvider } from '@kinde-oss/kinde-auth-react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KindeProvider
		clientId="81f9f8fa2a9a49a39b95556ab85e3380"
		domain="https://neringa.kinde.com"
		redirectUri="http://localhost:5173"
		logoutUri="http://localhost:5173"
	  >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>

    </KindeProvider>
  </StrictMode>,
)
