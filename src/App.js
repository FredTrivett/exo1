import './App.css'
import Offers from './offers.js';
import './styles/base.css'

function App() {

  const data = [
    {
      title: "Premium",
      price: "39,999",
      features: [
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
        },
        {
          text: "Service de remplacement de batterie",
          checked: true
        },
        {
          text: "Service de remplacement de pneus",
          checked: false
        },
        {
          text: "Service de remplacement de pneus",
          checked: false
        },
        {
          text: "Service de remplacement de pneus",
          checked: false
        },
        {
          text: "Service de remplacement de pneus",
          checked: false
        }
      ]
    },
    {
      title: "Prestige",
      price: "49,999",
      features: [
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
        },
        {
          text: "Service de remplacement de batterie",
          checked: true
        },
        {
          text: "Service de remplacement de pneus",
          checked: true
        },
        {
          text: "Service de remplacement de pneus",
          checked: true
        },
        {
          text: "Service de remplacement de pneus",
          checked: true
        },
        {
          text: "Service de remplacement de pneus",
          checked: true
        }
      ]
    }
  ];

  return (
    <Offers ...{data} />
  );
}

export default App;
