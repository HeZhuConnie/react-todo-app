import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addItem} from "./store";

function InputField(props: any) {
    const [item, setItem] = useState("");
    const dispatch=useDispatch();

    function handleChange(event: any) {
        const msg = event.target.value;
        setItem(msg);
    }

    function handleOnClick() {
        dispatch(addItem({message: item, status: false}))
        setItem("")
    }

    return (
        <div className="InputField">
            <input type="text" value={item} onChange={handleChange}/>
            <button onClick={handleOnClick}>提交</button>
        </div>
    );
}


export default InputField;