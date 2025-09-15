import { GlobalContext } from './GlobalContext';

export default function GlobalState({children}) {
  return (
    <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
  )
}
