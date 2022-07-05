import Image from "next/image";
import styles from "./PostCard.module.scss";
import cn from "classnames";

const PostCard = ({ description = true, extra = false }) => {
  let extraClass = cn({
    extra: extra ? "extra" : ""
  });
  return (
    <article className={`${styles.card} ${styles[extraClass]}`}>
      <div className={styles.cardImg}></div>
      <div className={styles.cardBody}>
        <h2 className={styles.title}>
          <a href="#">Dreaming of Las Vegas Crazyness</a>
        </h2>
        {description && (
          <p className={styles.description}>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        )}

        <div className={styles.metaFooter}>
          <div className={styles.authorThumb}>
            <a href="#">
              <Image
                src={`https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x`}
                height="40px"
                width="40px"
              />
            </a>
          </div>
          <div className={styles.authorMeta}>
            <div className={styles.authorName}>Mary</div>
            <div>
              <span className={styles.postDate}>22 July 2017</span>
              <span className={styles.dot}>.</span>
              <span className={styles.postRead}>6 min read</span>
            </div>
          </div>
          <div className={styles.postReadMore}>
            <img src="/img/read-more.svg" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
