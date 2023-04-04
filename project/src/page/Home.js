/* eslint-disable */
import { useSelector, useDispatch } from "react-redux";
import { increseCount } from "reducers/count";

// dispatch를 사용하기 위한 준비
const dispatch = useDispatch();

// store에 접근하여 state 가져오기
const { count } = useSelector(state => state.counter);

const increse = () => {
  // store에 있는 state 바꾸는 함수 실행
  dispatch(increseCount());
};
const Home = () =>{
    return(
        <>
            <h1>HOME</h1>
            <div>
                {count}
                <button onClick={increse}>증가</button>
            </div>
        </>
    )
}
export default Home ;