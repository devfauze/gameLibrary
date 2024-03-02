import { useState } from "react"

export default function useGameCollection() {

    //[✅]Salvar em local storage os jogos inputados
    const [games, setGames] = useState(() => {
        const storedGames = localStorage.getItem("game-lib")
        if(!storedGames) return[]
        return JSON.parse(storedGames)
      })
      
      //[✅]Adicionar game
      const addGame = ({ title, cover }) => {

        //[✅]Id random para os games
        const id = Math.floor(Math.random() * 1000000)
        const game = { id, title, cover }

        //[✅]Cria o jogo dentro do array de jogos
        setGames(state => {
          const newState = [...state, game]
          localStorage.setItem("game-lib", JSON.stringify(newState))
          return newState
        })
      }

      //[✅]Remover jogos
      const removeGame = (id) => {
        setGames(state => {
          const newState = state.filter(game => game.id !== id)
          localStorage.setItem("game-lib", JSON.stringify(newState))
          return newState
        })
        }
    return({ games, addGame, removeGame})
}