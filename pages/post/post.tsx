import type { NextPage } from "next";
import styles from "./post.module.scss";
import PostCard from "../../components/postcard/PostCard";

const Post: NextPage = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.authorMeta}>
          <div className={styles.authorThumb}>
            <img
              src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x"
              alt=""
            />
          </div>
          <div className={styles.authorInfo}>
            <div className={styles.authorName}>
              <span className={styles.name}>Sal</span>
              <button className={styles.follow}>Follow</button>
            </div>
            <div className={styles.authorDescription}>
              Founder of WowThemes.net and creator of "Mediumish" theme that
              you're currently previewing. Developing professional premium
              themes, templates, plugins, scripts since 2012.
            </div>
            <div className={styles.metaDate}>
              <span className={styles.postDate}>22 July 2017</span>
              <span className={styles.dot}>.</span>
              <span className={styles.postRead}>6 min read</span>
            </div>
          </div>
        </div>

        <section className={styles.post}>
          <h1 className={styles.postTitle}>
            18 Things You Should Learn Before Moving Into a New Home
          </h1>
          <div className={styles.postImage}>
            <img src="/img/demopic/10.jpg" alt="" />
          </div>
          <div className={styles.postDescription}>
            Holy grail funding non-disclosure agreement advisor ramen
            bootstrapping ecosystem. Beta crowdfunding iteration assets business
            plan paradigm shift stealth mass market seed money rockstar niche
            market marketing buzz market. Burn rate release facebook termsheet
            equity technology. Interaction design rockstar network effects
            handshake creative startup direct mailing. Technology influencer
            direct mailing deployment return on investment seed round. Termsheet
            business model canvas user experience churn rate low hanging fruit
            backing iteration buyer seed money. Virality release launch party
            channels validation learning curve paradigm shift hypotheses
            conversion. Stealth leverage freemium venture startup
            business-to-business accelerator market. Freemium non-disclosure
            agreement lean startup bootstrapping holy grail ramen MVP iteration
            accelerator. Strategy market ramen leverage paradigm shift seed
            round entrepreneur crowdfunding social proof angel investor partner
            network virality.
          </div>
          <div className={styles.postTags}>
            <a href="#">Design</a>
            <a href="#">Design</a>
            <a href="#">Design</a>
            <a href="#">Design</a>
            <a href="#">Design</a>
          </div>
        </section>
      </div>
      <section className={styles.wrapListPostsRelated}>
        <div className="container">
          <div className={styles.listPostsRelated}>
            <PostCard description={false} extra={false} />
            <PostCard description={false} extra={false} />
            <PostCard description={false} extra={false} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Post;
