    import React, { useState } from 'react';
    import "./Button.css";

    function Button() {

        const [count, setCount] = useState(0)
        
        const clickHandler = (e) => {
            setCount(currentCount => currentCount + 1);
        }

        return (
            <button className='button' onClick={clickHandler}  >
                Click Count {count}
            </button>
        )
    }

    export default Button;