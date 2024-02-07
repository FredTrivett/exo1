import React from 'react';
import Team from './team';

import './styles/base.css';

const Content = [
  {
    title: "Notre équipe",
    heading: "Présentation de notre formidable équipe",
    description: "Découvrez les esprits créatifs qui propulsent Auto Innovation vers de nouveaux sommets dans le monde de la conduite à hydrogène."
  }
];

const App = () => {
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
      <Team />
    </section>
  );
}

export default App;