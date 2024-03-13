import Article from '../Article';
import styles from './MainContainer.module.css'
// import articles from '../../data/data.js'
import MainArticle from './MainArticle/index.jsx';
import { mainStory } from '../../data/data';

const MainContainer = () => {
    
    return (
        <section className={styles.maincontainer}>

            <section className={styles.firstArticleBlock}>
                <section className={styles.recentNewsColumn}>
                    <h1>Recent News</h1>
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                </section>
                <section className={styles.inFocus}>
                    <MainArticle {...mainStory}/>
                </section>
                <section className={styles.thirdColumn}>
                    <Article headline='Argentina won the fifa world cup'/>
                    <Article headline='X users vote oust Musk, CEO'/>
                </section>
            </section>

            <section className={styles.secondArticleBlock}>
                    <h1>International</h1>
                <section className={styles.internationalArticles}>
                    <Article />
                    <Article />
                    <Article />
                </section>
            </section>

            <section className={styles.thirdArticleBlock}>
                <h1>Sports</h1>
                <Article/>
                <Article />
            </section>
        </section>
    )
};

export default MainContainer;