import React from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";
import {useDispatch, useSelector} from 'react-redux';
import {setCategory, setCurrentPage} from "../redux/slices/filterSlice";
import {fetchPizzas} from "../redux/slices/pizzaSlice";

const Home = () => {
    const dispatch = useDispatch();
    const {selectedCategory, sort, currentPage, searchValue} = useSelector(state => state.filter);
    const {items, status} = useSelector(state => state.pizza);

    const category = selectedCategory > 0 ? `category=${selectedCategory}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    const getPizzas = () => {
        dispatch(fetchPizzas({
            currentPage,
            search,
            order,
            sortBy,
            category
        }))

        window.scrollTo(0, 0)
    }

    React.useEffect(() => {
        getPizzas()
    }, [selectedCategory, sort, search, currentPage])

    const onChangePage = (num) => {
        dispatch(setCurrentPage(num))
    }

    const skeleton = [...new Array(6)].map((_, i) => (<Skeleton key={i}/>));
    const pizzas = items.map((obj) => (<PizzaBlock {...obj} key={obj.id}/>));

    return (
        <div className='container'>
            <div className="content__top">
                <Categories value={selectedCategory} onClickHandler={(i) => dispatch(setCategory(i))}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {status === "error" ? (<div>Произошла ошибка</div>) : (
                <div className="content__items">
                    {status === "loading" ? skeleton : pizzas}
                </div>
            )}

            <Pagination value={currentPage} setSelectedPage={onChangePage}/>
        </div>
    )
}

export default Home;