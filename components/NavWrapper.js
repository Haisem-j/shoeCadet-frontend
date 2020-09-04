import Nav from './nav';
import { useRouter } from 'next/router'


export default function NavWrapper() {
    const router = useRouter()

    return (
        <>
            <Nav pathname={router.pathname}/>
        </>
    )
}