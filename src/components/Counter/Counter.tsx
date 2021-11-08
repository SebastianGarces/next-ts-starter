import { useState } from "react"
import styles from "./Counter.module.scss"

export default function Counter() {
    const [count, setCount] = useState(0)
    function incrementCount() {
        return setCount(count => (count += 1))
    }

    return (
        <button className={styles.btn} onClick={incrementCount}>
            Count: {count}
        </button>
    )
}
