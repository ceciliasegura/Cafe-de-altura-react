export default function CoffeCard({ imgSrc, text, price, id }) {
    
    const addCoffe = (event, id, text, price, img) => {
        event.preventDefault();
        let coffesStorage = JSON.parse(localStorage.getItem('coffes'));
        if(coffesStorage === null){
            coffesStorage = [];
        }        
        const found = coffesStorage.find(coffe => coffe.id === id);
        if (found === undefined) {
            coffesStorage.push({
                "id": id,
                "text": text,
                "price": price,
                "img": img,
                "count": 1
            });
        }else{
            coffesStorage.map(coffe => {
                if(coffe.id === id){
                    return {...coffe, count: coffe.count++}
                 }else{
                    return coffe;
                 }
            });
        }

        localStorage.setItem("coffes", JSON.stringify(coffesStorage));
    }
    return (
        <div className="flex flex-col items-center gap-6 p-6 border border-taupe rounded-lg shadow-md hover:bg-beige-coffe transition-colors duration-500">
            <img src={imgSrc} alt="" />
            <h4>{text}</h4>
            <p><span>{price}</span>€</p>
            <button className="w-16 h-8 text-sm text-white rounded bg-green-coffe" onClick={(event) => addCoffe(event, id, text, price, imgSrc)}>Añadir</button>
        </div>
    )
}