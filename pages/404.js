import Image from "next/image";
import Link from "next/link";
import styles from '../styles/404.module.css';
const CustomNotFound = () => {

    return (
        <div className={styles.not_found}>
            <div className={styles.not_found_image}>
                <Image  width={"1000"} height={"440"} src="/notfound.svg" />
            </div>
            <div className="not-found-content">
                <h1>PAGE NOT FOUND</h1>
                <p>Sorry&#44; we couldn&apos;t find the page you are looking for</p>
                <div className={styles.not_found_links}>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/blog"><a>Visit Blog</a></Link>
                </div>
            </div>
        </div>
    );
};

export default CustomNotFound;