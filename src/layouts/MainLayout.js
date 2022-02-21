import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import styles from './MainLayout.module.css';

const MainLayout = ({children}) => {

    return (
        <div className={styles.layout}>
            <Header />
            {children}
            <Footer />
        </div>
    )
};

export default MainLayout;