import '../index.css'
import {ModelInterface} from '../model-interface'
const Card = ({cards}:ModelInterface)=>{
    return(
        <div className="card-container">
            {
                cards.map((card)=>{return(
                    <div className='card'>
                    <div className='img-container'>
                        <img src={card.image} alt="travel-location" />
                    </div>
                    <div className='travel-details'>
                    </div>
                    </div>
                )})
            }

        </div>
    )
}

export default Card;