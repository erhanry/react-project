import { memo } from 'react';
import style from './Header.module.css';

const HeaderTop = ({
    userEmail,
}) => {
    return (
        <div id={style['user-details']}>
            <div className="container">
                <div className="row">
                    <div className="col text-center text-lg-right pr-6">{userEmail && (`Потребител: ${userEmail}`)}</div>
                </div>
            </div>
        </div>
    );
};

export default memo(HeaderTop);
