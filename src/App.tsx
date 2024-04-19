import { Container } from './style'
import { Button } from './components/Button'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [firstEmail, setFirstEmail] = useState<string | undefined>('')
  const [secondEmail, setSecondEmail] = useState<string | undefined>('')
  const [conteudo, setConteudo] = useState<string | undefined>('')
  const validate = firstEmail && firstEmail.length && secondEmail && secondEmail.length ? true : false

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
   e.preventDefault()
   axios.post(`http://localhost:3000`,{
    "de": `${firstEmail}`,
    "para": `${secondEmail}`,
    "conteudo": `${conteudo}`,
   })
   .then(() => {
    alert('Email enviado com sucesso')
   })
   .catch(() => {
    alert('Erro, falha ao enviar email')
   })
  }

  return (
   <>
    <Container>
     <form>
      <input type="email" placeholder='Declare seu email' onChange={(e) => setFirstEmail(e.target.value)}/>
      <input type="email" placeholder='Para onde deseja enviar' onChange={(e) => setSecondEmail(e.target.value)}/>
      <input type="text" placeholder='O que deseja enviar' onChange={(e) => setConteudo(e.target.value)}/>
      <Button state={validate} sendEmail={() => sendEmail}/>
     </form>
    </Container>
   </>
  )
}

export default App
