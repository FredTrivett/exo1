import Card from './card';

const Team = (data) => {
    const { Content, Employees } = data;
    const { title, heading, description } = Content[0];

    return (
        <section>
            <header className="team__header">
                <h2 className="team__title">{title}</h2>
            </header>
            <section className="team__content">
                <h1 className="team__heading">{heading}</h1>
                <p className="team__description">{description}</p>
            </section>
            <ul className="gallery">
                {Employees.map((employee) => (
                    <li key={employee.name}>
                        <Card
                            imageSrc={employee.imageSrc}
                            altText={employee.altText}
                            name={employee.name}
                            role={employee.role}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Team;