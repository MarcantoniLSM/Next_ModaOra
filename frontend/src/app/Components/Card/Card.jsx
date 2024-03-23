import './Card.css'

export default function Card(props){
    return(
        <div className='card'>
            <img src={props.source} alt={props.alt}/>
            <h2>{props.name}</h2>
            <span>{props.description}</span>
        </div>
    )
}