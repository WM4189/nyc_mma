import ReviewForm from './ReviewForm'

function GymContainer(props){
    const {name, address, hours, average_rating, link, art, review} = props

   const gymName = {
    textDecoration: "underline"
    }
// console.log(review)
const reviews = review.map(rev =>rev.map(r => <p><li><em>{r}</em></li></p>) )
    return(
    <div className="centered">
        <section className="cards">

            <article id="card" className="card">
                <h3 style={gymName}>{name}</h3>
                <strong className="art">{art} Focused</strong>
                <p>{address}</p>
                <a className='gym' href={link}>{link}</a>
                <br />
                <br />
                <strong><p>Reviews:</p></strong>
                {reviews}
            </article>

            <article className="card">
            <p>content for card two</p>
            </article>

            <article className="card">
            <p>content for card three</p>
            </article>

            <article className="card">
            <p>content for card four</p>
            </article>

            <article className="card">
            <p>content for card five</p>
            </article>

            <article className="card">
            <p>content for card six</p>
            </article>

            <article className="card">
            <p>content for card seven</p>
            </article>

        </section>
    </div>
    )
}

export default GymContainer