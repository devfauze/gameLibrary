//[✅]Importações
import PropTypes from "prop-types"

//[✅]Definindo proptypes
Game.propTypes = {
    title: PropTypes.string,
    cover: PropTypes.string,
    onRemove: PropTypes.func
}

//[✅]Função que mostra o game
export default function Game({ title, cover, onRemove}) {
    return (
        <div>
          <img src={cover} alt="" />
          <div>
            <h2>{title}</h2>
            <button onClick={onRemove}>
              Remover
            </button>
          </div>
        </div>
    )
}