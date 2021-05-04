import React from 'react';

const Header = ({titulo}) => {
    return (
        <div className="container header"> 
            <h1>{titulo}</h1>
        </div>
    );
}
 
export default Header;