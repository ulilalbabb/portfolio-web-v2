'use client'

import { useState } from "react";
import Button from "../../elements/Button/Button";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <p>Count: {count}</p>
            <Button variant="primary" onClick={() => setCount(count + 1)}>Increment</Button>
        </>
    );
}

export default Counter