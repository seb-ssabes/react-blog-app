import { useState } from 'react';
import { GlobalContext } from './GlobalContext';

export default function GlobalState({children}) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  })


  return (
    <GlobalContext.Provider
      value={{formData, setFormData}}
    >
      {children}
    </GlobalContext.Provider>
  )
}
