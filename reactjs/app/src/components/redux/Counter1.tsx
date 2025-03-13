import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { decrement, increment, reset } from "../../redux/slice/CounterSlice";

const Counter1: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch: AppDispatch = useDispatch();


    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Tambah</button>
            <button onClick={() => dispatch(decrement())}>Kurangi</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}


export default Counter1;





/*
    penjelasan

    useSelector(state=> state.counter.value)   => mengambil nilai state dari redux store 
    useDispatch                                => untuk mengirim action ke redux store
    dispatch(increment)                        => menjalankan aksi increment, decrement atau reset

*/
