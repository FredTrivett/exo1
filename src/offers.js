import Card from './card.js';

export default function Offers({ title, description, offers }) {

    let handler = function () {
        console.log('clicked');
    }
    return (

        <section>

            <div className="offer">
                <div className="offer-section">
                    <h2 className="offer-section__title">{title}</h2>
                    <p className="offer-section__description">{description}</p>

                    <div className='switch-container'>
                        <p className='switch-text'>Buy</p>
                        <label className="switch">
                            <input onClick={handler} type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                        <p className='switch-text'>Lease</p>
                    </div>

                    <div className="box"><>
                        <Card props={offers[0]} />
                        <Card props={offers[1]} />
                        <Card props={offers[2]} />
                    </>
                    </div>
                </div>
            </div>

        </section>

    );
}
