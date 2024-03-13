import MainImage from '../../../assets/ashes.jpeg'
import { mockData } from '../../../data/data'

const MainArticle = () => {
    return (
        <div className={styles.MainArticle}>
            <img src={MainImage} alt={mockData.headline} width='100%'></img>
            <h2>{mockData.headline} {mockData.deck}</h2>
            <p>{mockData.story}</p>
            <p>{mockData.category}</p>
        </div>

    )
}

export default MainArticle