import {useParams} from "react-router-dom";
import React from 'react'
import axios from "axios";

const FullPizza: React.FC = () => {
    const {id} = useParams();
    const [pizza, setPizza] = React.useState(null);


    React.useEffect(() => {
        async function fetchPizza()  {
            try {
                const {data} = await axios.get(`https://67fdfcd73da09811b177254c.mockapi.io/item/` + id);
                setPizza(data)
                console.log(data)
            } catch (error) {
                alert(`Failed to fetch Pizza ${id}`);
            }
        }

        fetchPizza();
    },[id])

    if (!pizza) {
        return 'Загрузка...'
    }

    return (
        <div>
            <img src={pizza.imageUrl} alt="Pizza" />
            <h2>{pizza.name}</h2>
            <p>Вкусная пицца</p>
            <span>{pizza.price}</span>
        </div>
    )
}

export default FullPizza;