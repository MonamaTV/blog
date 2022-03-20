import styles from './controls.module.css';
import Link from 'next/link';


const BlogContent = () => {

    
    return (
        <Link href="/blog/something" >
            <a className={styles.content}>
                
                <div className={styles.img}>
                    <img src="./react.png" alt="" />
                </div>
                <div className={styles.blog__title}>
                    <h2>JavaScript In A Few</h2>
                    {/* <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptatibus at veniam?</small> */}
                    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptatibus at veniam?</small>
                </div>
            </a>
        </Link>
    )
};

export default BlogContent;