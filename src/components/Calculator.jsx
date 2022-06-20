import { useState } from "react"

const [val, setVal] = useState("");

const backspace = () => {
    try {
        setVal(val.slice(0, -1))
    } catch (error) {
        setVal("")
    }
}

const calculate = () => {
    try {
        setVal(eval(val));
    } catch (error) {
        setVal("Error");
    }
}

<div className="calc">
    <input type="text" className="form-control form-control-lg mb-4
    text-center bg-light fs-4 text-primary shadow" value={val} onChange={(e)=> setVal(e.target.value)} />
    <div className="row">
        {/* 1 */}
        <div className="col-3">
            <button
                className="btn btn-light text-primary shadow p-4 fs-4" value="1"
                onCLick={(e) => setVal(val + e.target.value)}>2</button>
        </div>
        {/* 2 */}
        <div className="col-3">
            <button
                className="btn btn-light text-primary shadow p-4 fs-4" value="2"
                onCLick={(e) => setVal(val + e.target.value)}>2</button>
        </div>
        {/* 3 */}
        <div className="col-3">
            <button
                className="btn btn-light text-primary shadow p-4 fs-4" value="3"
                onCLick={(e) => setVal(val + e.target.value)}>3</button>
        </div>
        {/* backspace */}
        <div className="col-3">
            <button
                className="btn btn-light text-primary shadow px-2 py-4 fs-4" value="C"
                onCLick={() => backspace()}>C/CE</button>
        </div>
    </div>

    <div className="row mt-2">
        {/* 4 */}
        <div className="col-3">
            <button
                className="btn btn-light text-primary shadow p-4 fs-4" value="4"
                onCLick={(e) => setVal(val + e.target.value)}>4</button>
        </div>
        {/* 5 */}
        <div className="col-3">
            <button
                className="btn btn-light text-primary shadow p-4 fs-4" value="5"
                onCLick={(e) => setVal(val + e.target.value)}>5</button>
        </div>
        {/* 6 */}
        <div className="col-3">
            <button
                className="btn btn-light text-primary shadow p-4 fs-4" value="6"
                onCLick={(e) => setVal(val + e.target.value)}>6</button>
        </div>
        {/* + */}
        <div className="col-3">
            <button
                className="btn btn-light text-primary shadow p-4 fs-4" value="3"
                onCLick={(e) => setVal(val + e.target.value)}>+</button>
        </div>
    </div>

    <div className="row mt-2">
        {/* 7 */}
        <div className="col-3">
            <button
                className="btn btn-light text-primary shadow p-4 fs-4" value="7"
                onCLick={(e) => setVal(val + e.target.value)}>7</button>
        </div>
        {/* 8 */}
        <div className="col-3">
            <button
                className="btn btn-light text-primary shadow p-4 fs-4" value="8"
                onCLick={(e) => setVal(val + e.target.value)}>8</button>
        </div>

        {/* 9 */}
        <div className="col-3">
            <button
                className="btn btn-light text-primary shadow p-4 fs-4" value="9"
                onCLick={(e) => setVal(val + e.target.value)}>9</button>
        </div>

        {/* X */}
        <div className="col-3">
            <button
                className="btn btn-light text-primary shadow p-4 fs-4" value="3"
                onCLick={(e) => setVal(val + e.target.value)}>x</button>
        </div>
    </div>

    <div className="row mt-2">
        {/* . */}
        <div className="col-3">
            <button
                className="btn btn-light text-primary shadow p-4 fs-4" value="."
                onCLick={(e) => setVal(val + e.target.value)}>.</button>
        </div>

        {/* 0 */}
        <div className="col-3">
            <button
                className="btn btn-light text-primary shadow p-4 fs-4" value="0"
                onCLick={(e) => setVal(val + e.target.value)}>0</button>
        </div>

        {/* = */}
        <div className="col-3">
            <button
                className="btn btn-light text-primary shadow p-4 fs-4" value="3"
                onCLick={() => calculate()}>=</button>
        </div>

        {/* / */}
        <div className="col-3">
            <button
                className="btn btn-light text-primary shadow p-4 fs-4" value="3"
                onCLick={(e) => setVal(val + e.target.value)}>:</button>
        </div>

    </div>




</div>