import {useState} from 'react';

const useLocalStorage = (key, initialValue) => {

    const [valueStored,setValueStored] = useState(()=>{
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item): initialValue
    });

    const setValue = (value) =>{
        setValueStored(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [valueStored, setValue]
}
export default useLocalStorage;