import '../Card/card.css'

export default function Card(props) {
    return(
        <section className={`section-card ${props.classEdit}`}>
            <h2>{props.tittle}</h2>
            <p>
                {props.content}
            </p>

            <span>
                Autor: {props.author}
            </span>
        </section>
    )
}