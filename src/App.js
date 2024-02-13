import React from 'react';
import Team from './team';

import './styles/base.css';

const data = {
  Content: [
    {
      title: "Prix et option à l'achat",
      description: "Découvrez l'avenir de la mobilité avec des prix compétitifs et des options d'achat flexibles chez Auto Innovation."
    }
  ],
  Card: [
    {
      name: "Starter Package",
      role: "29 999.99",
    },
    {
      name: "Standard Package",
      role: "39 999.99",
    },
    {
      name: "Premium Package",
      role: "49 999.99",
    }
  ]
};

const App = () => {
  return (
    <>
      <Team
        {...data}
      />
    </>
  );
}

export default App;