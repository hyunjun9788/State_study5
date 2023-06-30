import './App.css';
import {useState} from "react";
import Input from "./components/Input";
import Button from "./components/Button";

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
            <Input placeholder='유저명' value={textId} onChange={idInputHandler}/>
            <Input placeholder='비밀번호' value={textPw} onChange={pwInputHandler} type='password'/>
            <Button type='submit'>제출</Button>
        </form>
    );
}

export default App;
