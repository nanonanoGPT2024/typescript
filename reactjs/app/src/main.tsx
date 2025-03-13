import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'
import { store } from './redux/store.ts'
import React from 'react'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)



/*
    penjelasan

    provider : membungkus aplikasi supaya semua komponen bisa mengakses redux store
    store={store} : menghubungkan redux store ke react

*/