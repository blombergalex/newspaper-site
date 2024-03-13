import styles from './MainArticle.module.css'
import { getImageURL } from '../../../utils/functions'

const MainArticle = ({headline, deck, story, category, image}) => {
    return (
        <div className={styles.MainArticle}>
            <img src={getImageURL(image)} alt={`image of ${headline}`} width='300px'/>
            <h2>{headline} {deck}</h2>
            <p>{story}</p>
            <p>{category}</p>
        </div>

    )
}

export default MainArticle