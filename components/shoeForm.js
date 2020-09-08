import { useState } from 'react';
import { URL_LINK } from '../globals';
import Router from 'next/router';

const shoeForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [size, setSizes] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //Create a new form data object
            const formData = new FormData();

            //Taking care of the file upload struct
            let file = event.target.file;

            //Appending all relevent data to the form data object
            formData.append("file", file.files[0]);
            formData.append("title", title);
            formData.append("price", price);
            formData.append("size", size);
            formData.append("description", description);

            //Sending a POST request with the formData
            let response = await fetch(`${URL_LINK}/shoes/addShoe`, {
                method: "POST",
                body: formData
            })

            //Processing the response
            let data = await response.json()
          setMessage('Success');

        } catch (error) {
            setMessage('Fail');
        }
    }

    const messageBlock = () => {
        if (message === 'Success') {
            return (
                <>
                <div className="success-block">Shoe has been added!</div>
                {routePush()}
                </>
            )
        } else {
            return (
                <div className="error-block">Something went wrong..Check you inputs</div>
            )
        }
    }

    const routePush = () =>{
        setTimeout(() => {
            Router.push('/')
        }, 1000);
    }

    return (
        <form className="shoe-form" onSubmit={handleSubmit}>
            {message === '' ? null : messageBlock()}
            <label htmlFor="fname">Title:</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} required/>
            <label htmlFor="lname">Price</label>
            <input type="number" onChange={(e) => setPrice(e.target.value)} required></input>
            <label htmlFor="fname">Sizes (Type size then a comma):</label>
            <input type="text" placeholder="Type size like this 9,9.5,10" onChange={(e) => setSizes(e.target.value)} required/>
            <label htmlFor="fname">Description of shoe</label>
            <textarea rows="4" cols="50" name="comment" placeholder="Enter description here..." required onChange={(e) => setDescription(e.target.value)} />
            <label htmlFor="myfile">Select a Image:</label>
            <input type="file" id="file" name="file" required/>
            <button className="btn">Submit</button>
        </form>

    )
}


export default shoeForm
