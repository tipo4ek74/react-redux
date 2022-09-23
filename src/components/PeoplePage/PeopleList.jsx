import cn from 'classnames';
import styles from './PeopleList.module.css';

const PeopleList = ( { people } ) => {
  return (
    <ul className={styles.list__container}>
        {people.map(({id, name, url, img}) => {
            return(
                <li key={id} className={styles.list__item}>
                    <a href="#">
                      <img className={styles.person__photo} src={img} alt={name} />
                      <p>{name}</p>
                    </a>
                </li>
            )
        })}
    </ul>
  )
}

export default PeopleList;