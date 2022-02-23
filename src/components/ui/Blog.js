import BlogContent from '../controls/BlogContent';
import styles from './Blog.module.css';
import Link from 'next/link';
const Blog = () => {

    return (
        <div className="opp-container" id="blog">
            <div className="heading-title">
                <h1><span>B</span>LOG</h1>
                {/* <p>My latest blogs to enjoy</p> */}
            </div>
            <div className={styles.blog}>
                <BlogContent />
                <BlogContent />
                <BlogContent />
                <BlogContent />
            </div>
            <div className={styles.click}>
                <Link href="/blog"><a >Read More Blogs </a></Link>
            </div>
        </div>
    );
};

export default Blog;