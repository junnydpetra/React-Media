import videos from "../../json/videos.json";
import styles from "./Category.module.css";

export const categories = [
    "Calculus",  
    "Differential Equations",
    "Neural Networks",
  ]

export function categoryFilter(category_id) {
    return videos.filter( video => video.category === categories[category_id] );
} 

function Category({ category, children }) {
    return(
        <section className={styles.category}>
            <section className="cards">
                <section className={styles.category}>
                    <h2>{category}</h2>
                    <div>
                        { children }
                    </div>
                </section>
                {/* { videos.map(video => <Card video_id={video.id} key={video.id} /> )} */}
            </section>
        </section>
    );
}

export default Category;