import './App.css';
import {useState} from "react";


function App() {

    const [textId, setTextId] = useState('')
    const [textPw, setTextPw] = useState('')
    const idInputHandler = (e) => {
        setTextId(e.target.value)
    }
    const pwInputHandler = (e) => {
        setTextPw(e.target.value)
    }
    const formSubmitHandler = (e) => {
        e.preventDefault()
        if (textId.length === 0 || textPw.length === 0) {
            alert('유저명 또는 비밀번호를 입력하지 않으셨습니다.')
        } else
            alert(`${textId}님 환영합니다!`)
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <input placeholder='유저명' onChange={idInputHandler}/>
            <input placeholder='비밀번호' onChange={pwInputHandler}/>
            <button type='submit'>제출</button>
        </form>
    );
}

export default App;
