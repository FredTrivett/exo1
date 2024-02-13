import React from 'react';
import Team from './team';

import './styles/base.css';

const data = {
  Content: [
    {
      title: "Notre équipe",
      heading: "Présentation de notre formidable équipe",
      description: "Découvrez les esprits créatifs qui propulsent Auto Innovation vers de nouveaux sommets dans le monde de la conduite à hydrogène."
    }
  ],
  Employees: [
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
  ]
};

const data2 = {
  Content: [
    {
      title: "Notre équipe 2",
      heading: "Présentation de notre formidable équipe",
      description: "Découvrez les esprits créatifs qui propulsent Auto Innovation vers de nouveaux sommets dans le monde de la conduite à hydrogène."
    }
  ],
  Employees: [
    {
      name: "Gilles Damien",
      role: "Directeur commercial",
      imageSrc: "/gilles.jpg",
      altText: "Employé 3"
    },
    {
      name: "Gilles Damien",
      role: "Directeur commercial",
      imageSrc: "/gilles.jpg",
      altText: "Employé 3"
    },
    {
      name: "Gilles Damien",
      role: "Directeur commercial",
      imageSrc: "/gilles.jpg",
      altText: "Employé 3"
    },
    {
      name: "Gilles Damien",
      role: "Directeur commercial",
      imageSrc: "/gilles.jpg",
      altText: "Employé 3"
    }
  ]
};

const App = () => {
  return (
    <>
      <Team
        {...data}
      /><Team
        {...data2}
      />
    </>
  );
}

export default App;