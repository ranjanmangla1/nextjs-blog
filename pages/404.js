import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

export default function Custom404() {
    return (
        <div className={utilStyles.divAlign}>
            <div className={utilStyles.centerDiv}>
                <h1 className={utilStyles.headingXl}>404 Page not Found!</h1>
            </div>
            <div className={utilStyles.centerDiv}>
                <Image
                    src="/images/404.gif"
                    width='500'
                    height='500' />
            </div>
        </div>
    );
}