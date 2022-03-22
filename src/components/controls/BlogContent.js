import styles from './controls.module.css';
import Link from 'next/link';


const BlogContent = ({post}) => {

    const { name, slug, content: {
        description,
        thumbnail: {
            filename
        }
    }} = post;
    
    return (
        <Link href={`/blog/${slug}`} >
            <a className={styles.content}>
                <div className={styles.img}>
                    <img src={filename || "./react.png"} alt="" />
                </div>
                <div className={styles.blog__title}>
                    <h2>{name}</h2>
                    {/* <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptatibus at veniam?</small> */}
                    <small>{description}</small>
                </div>
            </a>
        </Link>
    )
};

export default BlogContent;