import styles from './Search.module.scss';
import React from 'react';
import debounce from 'lodash.debounce'
import {useDispatch, useSelector} from "react-redux";
import {setSearch} from "../../redux/slices/filterSlice";

const Search = () => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState('');
    const inputRef = React.useRef();

    const onClickInputClear = () => {
        inputRef.current.focus();
        dispatch(setSearch(''));
        setValue('')
    }

    const debounceSearchInput = React.useCallback(
        debounce((str) => {
            dispatch(setSearch(str));
    },1000),
    []
    )

    const onChangeInput = (event) => {
        setValue(event.target.value);
        debounceSearchInput(event.currentTarget.value);
    }

    return (
        <div className={styles.root}>
            <svg version="1.1"
                 id="Capa_1"
                 x="0px" y="0px"
                 viewBox="0 0 52.966 52.966"
                 className={styles.search}
            >
                <path
                    d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21 c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279 C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19 S32.459,40,21.983,40z"/>
            </svg>
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                className={styles.input}
                type="text"
                placeholder="Поиск..."
            />
            {value && <svg onClick={onClickInputClear} className={styles.close} id="Close"
                  enableBackground="new 0 0 128 128" viewBox="0 0 128 128"
                  xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m71.1 64 42.9 42.9-7.1 7.1-42.9-42.9-42.9 42.9-7.1-7.1 42.9-42.9-42.9-42.9 7.1-7.1 42.9 42.9 42.9-42.9 7.1 7.1z"/>
            </svg>}
        </div>
    )
}

export default Search;