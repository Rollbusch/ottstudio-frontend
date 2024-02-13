import { createContext, useContext, useState } from "react"

const DadosContext = createContext(null)

export function Dados({ children }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  return (
    <DadosContext.Provider
      value={{
        nome, setNome,
        email, setEmail,
      }}
    >
      {children}
    </DadosContext.Provider>
  )
}

export function useDadosContext () {
  const context = useContext(DadosContext)
  return context
}