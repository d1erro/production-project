import {useState} from "react";
import styles from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            {count}
            <button className={styles.btn} onClick={increment}>Increment</button>
            <button className={styles.btn} onClick={decrement}>Decrement</button>
        </div>
    );
};