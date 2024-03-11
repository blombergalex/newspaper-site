import styles from './Article.module.css'

const Article = ({headline, deck, story, image, category}) => {
    return (
        <div className={styles.article}>
            <h2>{headline}</h2>
            <h4>{deck}</h4>
            <p>{story}</p>
            <img src={image} alt={`image of ${headline}`} width='200px'/>
            <p>{category}</p>
        </div>
    )
}

Article.defaultProps = {
    headline: 'Something important',
    deck: 'The storyline of this important thing',
    story: 'You guessed it, here comes the story of the thing described above that has happened and is very important',
    category: 'important'
}

export default Article;