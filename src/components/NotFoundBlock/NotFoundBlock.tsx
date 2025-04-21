import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <span>😕</span>
            <h2>Ничего не найдено</h2>
        </div>
    )
}

export default NotFoundBlock;