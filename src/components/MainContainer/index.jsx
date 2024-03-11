import Article from '../Article';
import styles from './MainContainer.module.css'
// import articles from '../../data/data.js'

const MainContainer = () => {
    
    return (
        <section className={styles.maincontainer}>
            <>
            <Article />
            </>
            <section className={styles.FirstArticleBlock}>
                <Article />
                <Article />
                <Article />
            </section>
        </section>
    )
};

export default MainContainer;