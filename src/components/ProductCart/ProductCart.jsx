export default function ProductCart({number, img, name, price, id, addItem, removeItem}){
    
    const  getPrice = (price, number) => {
        return price * number + ",00€";
    }

    return(
        <div className="flex gap-4 p-4">
            <p className="" onClick={(e) => removeItem(e, id)}>-</p>
            <p className="">{number}</p>
            <p className="" onClick={(e) => addItem(e, id)}>+</p>
            <img src={img} width="55px" height="55px"/>
            <p>{name}</p>
            <p className="ml-auto">{getPrice(price, number)}</p>
        </div>

    )
}