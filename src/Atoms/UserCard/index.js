import React from 'react';
import './UserCard.css';

const UserCard = ({ image, fullName }) => {
    return (
        <div className="user-card">
            <img src={image} alt={fullName} className="user-image" />
            <h3>{fullName}</h3>
        </div>
    );
};

export default UserCard;
