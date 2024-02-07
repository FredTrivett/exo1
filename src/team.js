import Card from './card';

import Gilles from './images/gilles.jpg';
import Amelie from './images/amelie.avif';
import Edouard from './images/edouard.jpg';

const Employees = [
    {
        name: "Édouard Jérémie",
        role: "CEO",
        imageSrc: Edouard,
        altText: "CEO"
    },
    {
        name: "Amélie Christelle",
        role: "Directeur des recherche",
        imageSrc: Amelie,
        altText: "Employé 2"
    },
    {
        name: "Gilles Damien",
        role: "Directeur commercial",
        imageSrc: Gilles,
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