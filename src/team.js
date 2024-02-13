import Card from './card';

const Team = (data) => {
    const { Content, Card } = data;
    const { title, description } = Content[0];

    return (
        <div class="offer">
            <div class="offer-section">
                <h2 class="offer-section__title">{title}</h2>
                <p class="offer-section__description">{description}</p>
                <div class="box">
                    {/* {Card.map((card) => (
                        <Card
                            title={card.name}
                            price={card.role}
                        />
                    ))
                    } */}
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default Team;