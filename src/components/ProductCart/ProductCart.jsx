export default function ProductCart({number, img, name, price}){
    
    const  getPrice = (price, number) => {
        return price * number + ",00€";
    }

    return(
        <div className="flex gap-4 p-4">
            <p className="">-</p>
            <p className="">{number}</p>
            <p className="">+</p>
            <img src={img} width="55px" height="55px"/>
            <p>{name}</p>
            <p className="ml-auto">{getPrice(price, number)}</p>
        </div>

    )
}