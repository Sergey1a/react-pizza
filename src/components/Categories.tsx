const Categories = ({value, onClickHandler}) => {

    const categoriesArr = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']

    return (
        <div className="categories">
            <ul>
                {categoriesArr.map((category, i) => (
                    <li
                        key={i}
                        onClick={() => onClickHandler(i)}
                        className={value === i ? 'active' : ''}>
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;