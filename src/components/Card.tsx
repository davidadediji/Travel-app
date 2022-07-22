import '../index.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
                        <div className='travel-details-country'>
                            <p className='top-country'><span ><LocationOnIcon className='location-img'/></span><span>{card.country}</span></p>
                            <p className='map-ins'>View on Google Maps</p>
                        </div>
                        <p className='card-location'>{card.location}</p>
                        <p className='card-date'>{card.startdate} - {card.enddate}</p>
                        <p className='card-description'>{card.description}</p>
                    </div>
                    </div>
                )})
            }

        </div>
    )
}

export default Card;