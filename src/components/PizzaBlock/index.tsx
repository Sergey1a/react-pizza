import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../../redux/slices/cartSlice";
import {Link} from "react-router-dom";

const typeArray:string[] = ["тонкое", "традиционное"]

type PizzaBlockProps = {
    id,name, imageUrl, sizes, types, price
}

const PizzaBlock = ({id,name, imageUrl, sizes, types, price}) => {
    const dispatch = useDispatch();
    const cartItem = useSelector((state) =>state.cart.items.find(i => i.id === id));
    const [activeSize, setActiveSize] = React.useState(0);
    const [activeType, setActiveType] = React.useState(0);

    const addCheck = cartItem ? cartItem.count : 0;

    const onClickAddItem = () => {
        const newObj = {
            id: id,
            name:name,
            imageUrl:imageUrl,
            types: typeArray[activeType],
            sizes: sizes[activeSize],
            price: price,
        }
        dispatch(addItem(newObj))
    }

    const activeTypeHandler = (index) => {
        setActiveType(index)
    }

    const activeSizeHandler = (index) => {
        setActiveSize(index)
    }

    return (
        <div className="pizza-block">
            <Link to={`/fullpizza/${id}`}>
                <button className='pizza-block__button'>
                    <img
                        className="pizza-block__image"
                        src={imageUrl}
                        alt="Pizza"
                    />
                </button>
            </Link>
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types.map((typ, i) => (
                        <li
                            key={i}
                            onClick={() => activeTypeHandler(i)}
                            className={activeType === i ? 'active' : ''}>
                            {typeArray[typ]}
                        </li>
                    ))}
                </ul>
                <ul>
                    {sizes.map((size, i) => (
                        <li
                            key={i}
                            onClick={() => activeSizeHandler(i)}
                            className={activeSize === i ? 'active' : ''}>
                            {size}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <button onClick={onClickAddItem} className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {addCheck > 0 && <i>{addCheck}</i>}
                </button>
            </div>
        </div>
    )
}

export default PizzaBlock;