import styles from "./Group.module.css"

const Group =  ({ children }) => {

    return (

        <div className={styles.group}>
            { children }
        </div>
    )
}

export default Group;

