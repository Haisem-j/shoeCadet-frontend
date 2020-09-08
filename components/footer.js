import { useState, useEffect } from 'react';

export default function footer() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
    })

    return (
        <div className="footer">
            
        </div>
    )
}