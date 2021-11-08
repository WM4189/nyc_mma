import ReviewForm from './ReviewForm'
import {uid} from 'react-uid';

function GymContainer(props){
    const {name, address, average_rating, link, art, join} = props

   const gymName = {
    textDecoration: "underline"
    }

const review = join.map(rev => <p key={uid(rev)}><li><em>{rev.review}</em></li></p>)

    return(
    <div className="centered">
        <section className="cards">
        
            <article key={uid(name)} id="card" className="card">
                <h3 style={gymName}>{name}</h3>
                <strong className="art">{art} Focused</strong>
                <p>{address}</p>
                <a className='gym' href={link}>Website Link</a>
                <br />
                <br />
                <strong><p>Reviews:</p></strong>
                            {review}
            </article>
        </section>
    </div>
    )
}

export default GymContainer