import styles from './Loading.module.css';

export default function Loading() {

    return (
        <div className="container" style={{
            margin: "100px auto"
            }}>
        <div className={styles.ellipsis}><div></div><div></div><div></div><div></div></div>

        </div>
    )
}