import React from 'react'
import styles from "./SectionHeading.module.css"

const SectionHeading = ({ headText, subText }) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.subText}>{subText}</p>
            <h2 className={styles.headText}>{headText}</h2>
        </div>

    )
}

export default SectionHeading;