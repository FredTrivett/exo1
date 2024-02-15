import Card from './card.js';



function Offers() {
    return (

        <div className="offer">
            <div className="offer-section">
                <h2 className="offer-section__title">{title}</h2>
                <p className="offer-section__description">{desciption}</p>
                <div className="box">
                    {packages.map((item, index) => (
                        <Card key={index} label={item.name} price={item.price} perks={item.checked} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Offers;