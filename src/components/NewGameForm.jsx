//[✅]Importações
import { useState } from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'

//[✅]Definindo proptypes
NewGameForm.propTypes = {
    addGame: PropTypes.func
}

//[✅]Função de form para new game
export default function NewGameForm({ addGame }) {

    //[✅]useState
    const [title, setTitle] = useState("")
    const [cover, setCover] = useState("")

    //[✅]Função de submissão de formulário e limpar campos
    const handleSubmit = (ev) => {
        ev.preventDefault()
        addGame({ title, cover })
        setTitle("")
        setCover("")
    }

    //[✅]Campos de input 
    return(
        <form onSubmit={handleSubmit}>
        <TextInput id="title" label="Título:" value={title} setValue={setTitle}/>
        <TextInput id="cover" label="Capa:" value={cover} setValue={setCover}/>
          <button type="submit">Adicionar a biblioteca</button>
      </form>
    )
}