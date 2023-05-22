import React, { useState } from 'react'
import "./Styles/Form.css"

export default function Form() {
    const [userName, setUsername] = useState('')
    const [userDetails, setUserDetails] = useState('')


    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    const handleUserDetailsChange = (e) => {
        setUserDetails(e.target.value)
    }



    return (
        <div className='form-sec'>
            <form className='form-form'>
                <div className='inputs'>
                    <div className='username'>
                        <input type="text" name="username" placeholder='Enter Username' value={userName} onChange={handleChange} />
                        {/* display the name in the input field on the screen once the user types in the input field */}
                        <p className='output'>Username is: {userName}</p>
                    </div>

                    <div className='details'>
                        <textarea name="user-details" cols="30" rows="10" placeholder='Enter Details' value={userDetails} onChange={handleUserDetailsChange}></textarea>
                        {/* display the user details in the textarea on the screen once the user types in the textarea */}
                        <p className='output'>User details are: {userDetails}</p>
                    </div>
                </div>


            </form>
        </div>
    )
}

