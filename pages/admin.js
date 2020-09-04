import Login from '../components/login';
import { useState } from 'react';
import ShoeForm from '../components/shoeForm';
import EditShoe from '../components/editShoe';
import { URL_LINK } from '../globals'

const admin = ({ shoes }) => {
    const [loginStatus, setLogin] = useState(false);
    const [adminPage, setAdminPage] = useState('HOME');

    const setLoggin = () => {
        setLogin(true);
    }
    if (!loginStatus) {
        return (
            <div className="admin">
                <Login setLoggin={setLoggin} />
            </div>
        )
    } else {
        if (adminPage === 'HOME') {
            return (
                <div className="admin">
                    <div className="admin-choice" onClick={() => setAdminPage('ADD')}>Add A Shoe</div>
                    <div className="admin-choice" onClick={() => setAdminPage('UPDATE')}>Edit/Delete A Shoe</div>
                </div>
            )
        } else if (adminPage === 'ADD') {
            return (
                <div className="admin">
                    <ShoeForm />
                </div>
            )
        } else {
            return (
                <div className="admin">
                    <EditShoe shoes={shoes} />
                </div>
            )
        }
    }
}
// const admin = ({ shoes }) => {
//     const [loginStatus, setLogin] = useState(false);
//     const [adminPage, setAdminPage] = useState('HOME');
//     const setLoggin = () => {
//         setLogin(true);
//     }
//     return (
//         <div className="admin">
//             <EditShoe shoes={shoes}/>
//         </div>
//     )

// }

admin.getInitialProps = async () => {
    const res = await fetch(`${URL_LINK}/shoes`);
    const shoes = await res.json();
    return {
        shoes
    }
}
export default admin