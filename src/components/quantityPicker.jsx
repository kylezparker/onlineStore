import "./quantityPicker.css";
// import Product from "./product";

const QuantityPicker = () =>{
    return(
        <div className="quantityPicker">
            <button className="btn btn-primary btn-sm">-</button>
            <label>#</label>
            <button className="btn btn-primary btn-sm">+</button>
        </div>
    )
}

export default QuantityPicker;