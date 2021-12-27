import { useDispatch, useSelector } from 'react-redux';
import { Toggle_Show } from './store/actions/action';


export const Profile = () => {
    const dispatch = useDispatch();
    const {isTrue} = useSelector((state) => state.isTrue);



    return(<div>
        <h1>Profile</h1>


        <input type="checkbox" checked={isTrue} onChange={()=> {
            dispatch({type:Toggle_Show})
        }} />
    </div>)
}