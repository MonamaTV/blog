import BlogContent from '../controls/BlogContent';
import styles from './Blog.module.css';

const Blog = () => {

    return (
        <div className="opp-container">
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
                <a href="#">Read More Blogs </a>
            </div>
        </div>
    );
};

export default Blog;