import type { NextPage } from "next";
import styles from "./author.module.scss";
import PostCard from "../../components/postcard/PostCard";

const Author: NextPage = () => {
  return (
    <div>
      <section className={styles.wrapAuthor}>
        <div className="container">
          <div className={styles.author}>
            <div className={styles.authorThumb}>
              <img
                src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x"
                alt=""
              />
            </div>
            <div className={styles.authorInfo}>
              <h1 className={styles.authorName}>Sal</h1>
              <p className={styles.authorDescription}>
                Founder of WowThemes.net and creator of "Mediumish" theme that
                you're currently previewing. I professionally develop premium
                themes, templates & scripts since the Apocalypse (2012). You can
                reach me out on the social links below.
              </p>
              <div className={styles.socialLinks}>
                <img src="/img/fb-icon.svg" alt="facebook" />
                <span className={styles.dot}>-</span>
                <img src="/img/twitter-icon.svg" alt="twitter" />
              </div>

              <button className={styles.follow}>Follow</button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.wrapAuthorPosts}>
        <div className="container">
          <div className={styles.authorPosts}>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Author;
