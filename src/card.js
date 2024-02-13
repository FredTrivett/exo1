import React from 'react';

const Card = (props) => {
    const { cardTitle, price } = props;

    return (
        <ul class="offer-box">
            <li class="offer-box__header">
                <h3 class="offer-box__name">{cardTitle}</h3>
                <p class="offer-box__price">{price}</p>
            </li>
            <li class="offer-box__advantages">
            </li>
            <li class="advantage">
                <span class="advantage__checkmark">✓</span>
                <p class="advantage__text">Assurance auto complémentaire</p>
            </li>
            <li class="advantage">
                <span class="advantage__checkmark">✓</span>
                <p class="advantage__text">Première recharge offerte</p>
            </li>
            <li class="advantage">
                <span class="advantage__checkmark">✓</span>
                <p class="advantage__text">Assurance contre le vol</p>
            </li>
            <li class="advantage">
                <span class="advantage__checkmark">✓</span>
                <p class="advantage__text">Service de rappel d'entretien</p>
            </li>
            <li class="advantage">
                <span class="advantage__checkmark">  &nbsp;</span>
                <p class="advantage__text">Nettoyage hebdomadaire</p>
            </li>
            <li class="advantage">
                <span class="advantage__checkmark">  &nbsp;</span>
                <p class="advantage__text">Service de diagnostic à distance</p>
            </li>
            <li class="advantage">
                <span class="advantage__checkmark">&nbsp;&nbsp;&nbsp; </span>
                <p class="advantage__text">Service de remplissage du réservoir</p>
            </li>
            <li class="advantage">
                <span class="advantage__checkmark">  &nbsp;</span>
                <p class="advantage__text">Service de réparation à domicile</p>
            </li>
            <li class="advantage">
                <span class="advantage__checkmark">  &nbsp;</span>
                <p class="advantage__text">Entretien régulier</p>
            </li>
            <li class="advantage">
                <span class="advantage__checkmark">  &nbsp;</span>
                <p class="advantage__text">Recharge d'hydrogène illimité</p>
            </li>

            <li><a href="#Forms2" class="header__lien"><button class="header__button btn--hero__nav"> Get
                Started</button></a>
            </li>
        </ul>
    );
};

export default Card;