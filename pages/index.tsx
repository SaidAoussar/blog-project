import type { NextPage } from "next";
import Image from "next/image";
import readMoreIcon from "./../public/img/read-more.svg";
import styles from "./index.module.scss";
import Nav from "../components/navbar/Nav";
import PostCard from "../components/postcard/PostCard";
import Footer from "../components/footer/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <section className={styles.mainHeading}>
        <div className="container">
          <h1 className={styles.siteTitle}>Mediumish</h1>
          <p>Bootstrap theme, medium style, simply perfect for bloggers</p>
        </div>
      </section>
      <section className={`${styles.listPosts}`}>
        <div className="container">
          <h1 className={styles.sectionTitle}>featured</h1>
          <hr />

          <div className={styles.postsTwoColMd}>
            <PostCard extra />
            <PostCard extra />
            <PostCard extra />
            <PostCard extra />
          </div>
        </div>
      </section>

      <section className={styles.listPosts}>
        <div className="container">
          <h1 className={styles.sectionTitle}>All Stories</h1>
          <hr />

          <div className={styles.postsThreeColMd}>
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

export default Home;
