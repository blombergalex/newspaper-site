// import MainImage from '../../../assets/ashes.jpeg'
import { mockData } from '../../../data/data'
import styles from './MainArticle.module.css'

const MainArticle = (headline, deck, story, category, image) => {
    return (
        <div className={styles.MainArticle}>
            <img src={image} alt={`image of ${headline}`} width='300px'/>
            <h2>{mockData.headline} {mockData.deck}</h2>
            <p>{mockData.story}</p>
            <p>{mockData.category}</p>
        </div>

    )
}

export default MainArticle