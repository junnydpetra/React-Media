import styles from "./Card.module.css";

function Card({ video_id }) {
    return(
        <section className={styles.card}>
            <a 
                href={`https://www.youtube.com/watch?v=${video_id}`}
                rel="noreferrer noopener"
                target="_blank">
                <img src={`https://img.youtube.com/vi/${video_id}/mqdefault.jpg`} alt="Cover" />
            </a>
        </section>
    );
}
/* WUvTyaaNkzM */
export default Card;