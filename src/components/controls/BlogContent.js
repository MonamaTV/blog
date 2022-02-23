import styles from './controls.module.css';
const BlogContent = () => {

    return (
        <a href="#" className={styles.content}>
            <div className={styles.img}>
                <img src="./server.png" alt="" />
            </div>
            <div className={styles.blog__title}>
                <h2>JavaScript In A Few</h2>
                {/* <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptatibus at veniam?</small> */}
                <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptatibus at veniam?</small>
            </div>
        </a>
    )
};

export default BlogContent;