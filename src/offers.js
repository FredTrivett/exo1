import Card from './card.js';

const Offers = (data) => {
    const { title, description } = data;
    const { packages } = data[2];
    const { name, price, checked } = data.packages[0];


    function list() {
        return (

            <div className="offer">
                <div className="offer-section">
                    <h2 className="offer-section__title">{title}</h2>
                    <p className="offer-section__description">{description}</p>
                    <div className="box">
                        {packages.map((item, index) => (
                            <Card key={index} label={name} price={price} perks={checked} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Offers;