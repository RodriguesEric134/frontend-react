import styles from './componente1.module.css'
export default function Componente1(){
    return(
        <div>
            <h2>Componente 1</h2>
            <button className={styles.btn}>Clique aqui!!</button>
        </div>
    )
}