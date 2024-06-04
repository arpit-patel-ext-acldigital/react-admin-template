import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import store from './store'

import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </Provider>
)
