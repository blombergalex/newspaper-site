import styles from './Article.module.css'
import MainImage from '../../assets/ashes.jpeg'

const Article = ({headline, deck, story, image, category}) => {
    return (
        <div className={styles.article}>
            <h2>{headline}</h2>
            <h4>{deck}</h4>
            <p>{story}</p>
            <img src={MainImage} alt={`image of ${headline}`} width='100%'/>
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