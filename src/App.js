import './App.css'
import Offers from './offers.js';
import './styles/base.css'

let data = {
  title: "Prix et option à l'achat",
  description: "Découvrez l'avenir de la mobilité avec des prix compétitifs et des options d'achat flexibles chez Auto Innovation.",
  packages: [
    {
      name: "Basic Package",
      price: "29 999.99",
      perks: [
        {
          text: "Assurance auto complémentaire",
          checked: false
        },
        {
          text: "Première recharge offerte",
          checked: false
        },
        {
          text: "Assurance contre le vol",
          checked: false
        },
        {
          text: "Service de rappel d'entretien",
          checked: false
        },
        {
          text: "Nettoyage hebdomadaire",
          checked: false
        },
        {
          text: "Service de diagnostic à distance",
          checked: false
        },
        {
          text: "Service de remplissage du réservoir",
          checked: false
        },
        {
          text: "Service de réparation à domicile",
          checked: false
        },
        {
          text: "Entretien régulier",
          checked: false
        },
        {
          text: "Recharge d'hydrogène illimité",
          checked: false
        }
      ]
    },
    {
      name: "Prestige Package",
      price: "99 999.99",
      perks: [
        {
          text: "Assurance auto complémentaire",
          checked: true
        },
        {
          text: "Première recharge offerte",
          checked: true
        },
        {
          text: "Assurance contre le vol",
          checked: true
        },
        {
          text: "Service de rappel d'entretien",
          checked: true
        },
        {
          text: "Nettoyage hebdomadaire",
          checked: true
        },
        {
          text: "Service de diagnostic à distance",
          checked: true
        },
        {
          text: "Service de remplissage du réservoir",
          checked: true
        },
        {
          text: "Service de réparation à domicile",
          checked: true
        },
        {
          text: "Entretien régulier",
          checked: true
        },
        {
          text: "Recharge d'hydrogène illimité",
          checked: true
        }
      ]
    },
    {
      name: "Premium Package",
      price: "59 999.99",
      perks: [
        {
          text: "Assurance auto complémentaire",
          checked: true
        },
        {
          text: "Première recharge offerte",
          checked: true
        },
        {
          text: "Assurance contre le vol",
          checked: true
        },
        {
          text: "Service de rappel d'entretien",
          checked: true
        },
        {
          text: "Nettoyage hebdomadaire",
          checked: true
        },
        {
          text: "Service de diagnostic à distance",
          checked: true
        },
        {
          text: "Service de remplissage du réservoir",
          checked: true
        },
        {
          text: "Service de réparation à domicile",
          checked: true
        },
        {
          text: "Entretien régulier",
          checked: true
        },
        {
          text: "Recharge d'hydrogène illimité",
          checked: true
        }
      ]
    }
  ]
};



function App() {
  return (
    <Offers {...data} />
  );
}

export default App;
