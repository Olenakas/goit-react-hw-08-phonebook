import { BallTriangle} from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.load}>     
        <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#004385"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
        /> Download
    </div>
  );
};

export default Loader;
