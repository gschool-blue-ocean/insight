import React from 'react';
const ProfileOpen = () => {
    const username = 'Willy'
    return (
        <>
        <div id='username'>
            <p>username : {username}</p>
        </div>
        <div id='changePassword'>
        <p>change password</p>
        </div>
        <div id='deleteAccount' className='flex'>
        <button>x</button>
        <p>delete account</p>
        </div>
        </>
    )
};
export default ProfileOpen;