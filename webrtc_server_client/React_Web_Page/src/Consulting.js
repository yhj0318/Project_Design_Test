import React from 'react';
import { Link } from 'react-router-dom';

const Consulting = () => {
    return (
        <>
            <h3>상담기능 페이지입니다.</h3>
            <Link to={'/rtc'}>join</Link>
        </>
    );
};
  
export default Consulting;