import Card from './card';

const Employees = [
    {
        name: "Édouard Jérémie",
        role: "CEO",
        imageSrc: "/edouard.jpg",
        altText: "CEO"
    },
    {
        name: "Amélie Christelle",
        role: "Directeur des recherche",
        imageSrc: "/amelie.avif",
        altText: "Employé 2"
    },
    {
        name: "Gilles Damien",
        role: "Directeur commercial",
        imageSrc: "/gilles.jpg",
        altText: "Employé 3"
    }
];

function Team() {
    return (
        <ul className="gallery">
            {Employees.map((employee, index) => {
                return (
                    <Card
                        key={index}
                        imageSrc={employee.imageSrc}
                        altText={employee.altText}
                        name={employee.name}
                        role={employee.role}
                    />
                );
            })}
        </ul>
    );
}

export default Team;