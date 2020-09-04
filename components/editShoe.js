import { useState } from 'react';
import { URL_LINK } from '../globals';
import Router from 'next/router';

function EditShoe({ shoes }) {
    const [message, setMessage] = useState('');

    const handleDelete = async (id) => {
        try {
            let response = await fetch(
                `${URL_LINK}/shoes/del/${id}`,
                {
                    method: "POST",
                }
            );
            await response.json();
            setMessage('Success');
        } catch (err) {
            setMessage('Fail');
        }
    }
    const messageBlock = () => {
        if (message === 'Success') {
            return (
                <>
                    <div className="success-block">Shoe has been deleted!</div>
                    {routePush()}
                </>
            )
        } else {
            return (
                <div className="error-block">Something went wrong..Check you inputs</div>
            )
        }
    }

    const routePush = () => {
        setTimeout(() => {
            Router.push('/')
        }, 2000);
    }

    return (
        <div className="flex">
            {message === '' ? null : messageBlock()}
            <div className="editShoe">
                {shoes.map(shoe => {
                    return (
                        <div className="shoe-box" key={shoe._id}>
                            <h1>{shoe.title}</h1>
                            <div className="delete-btn" onClick={() => handleDelete(shoe.imageId)}>Delete</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default EditShoe;