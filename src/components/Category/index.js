import styles from "./Category.module.css";

function Category({ category, children }) {
    return(
        <section className={styles.category}>
            <h2>{category}</h2>
            <section className="cards">
                <section className={styles.card}>
                    <div>
                        { children }
                    </div>
                        {/* <a 
                        href={`https://www.youtube.com/watch?v=${video_id}`}
                        rel="noreferrer noopener"
                        target="_blank">
                        <img src={`https://img.youtube.com/vi/${video_id}/mqdefault.jpg`} alt="Cover" />
                    </a> */}
                </section>
                {/* { videos.map(video => <Card video_id={video.id} key={video.id} /> )} */}
            </section>
        </section>
    );
}

export default Category;