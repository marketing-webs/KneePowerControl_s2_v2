import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import './Accordion.css'
import nextId from "react-id-generator";

const ListArray = [
    {
        id: 1,
        title: "1. Ultralekki korpus wykonany ze specjalnego medycznego plastiku",
        text: "Dzięki niemu stabilizator jest wyjątkowo wygodny i wręcz niezauważalny. Po jego założeniu można nie tylko swobodnie się poruszać, ale nawet uprawiać sport, jednocześnie chroniąc zniszczone kolana.",
    },
    {
        id: 2,
        title: "2. Wykończenie miękkim, antypoślizgowym materiałem z „oddychających” mikrowłókien",
        text: "Specjalnie przygotowane włókna przepuszczają powietrze i tym samym zapewniają odpowiedni poziom wentylacji. Noga w stabilizatorze nie przegrzewa się, więc nie ma ryzyka pojawiania się otarć i odparzeń.",
    },
    {
        id: 3,
        title: "3. Wymienne sprężyny ze stopu aluminium (gatunek AI99)",
        text: "Dzięki sprężynom można skutecznie zmniejszyć nacisk na kolano. W ten sposób zostaje ono odciążone (nawet od 20 do 40 kg na jedną nogę, w zależności od wersji stabilizatora), a stawy mogą regenerować się w ekstremalnie szybkim tempie. Co ważne, sprężyny można łatwo oddzielić od reszty stabilizatora, co ułatwia jego czyszczenie.",
    },
    {
        id: 4,
        title: "4. Regulowane rzepy do zapinania, umożliwiające indywidualne dostosowanie do rozmiaru nogi",
        text: "Dzięki nim stabilizator jest na tyle uniwersalny, że nosić może go każdy bez względu na płeć, wzrost i budowę ciała.",
    },
]


const Accordion = () => {

    const [isVisible, setIsVisible] = useState(null);
    const [isOpen, setIsOpen] = useState(true);

    const toggle = (i) => {
        if (isVisible === i) {
            return setIsVisible(null)
        }
        setIsVisible(i)
    }


    return (
            ListArray.map((item, i) => {
            return (
                <div className='item' key={item.id}>
                    <div>
                        <p>
                            {item.title}
                        </p>
                        {isVisible === i ?
                            <button onClick={() => toggle(i)}>
                                Zwiń <FontAwesomeIcon icon={faAngleUp} />
                            </button> :
                            <button onClick={() => toggle(i)}>
                                Rozwiń <FontAwesomeIcon icon={faAngleDown} />
                            </button>}
                    </div>
                    <p className={isVisible === i ? "visible" : 'hidden'}>
                        {item.text}
                    </p>
                </div>
            )})
    );
};

export default Accordion;