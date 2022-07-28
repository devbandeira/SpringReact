import axios from "axios";
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

type Props = {
  saleId: number;
}

function handleClick(id: number){
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then(respose => {
    console.log("sucesso")
  })
}

function NotificationButton({ saleId }: Props) {//tenho que passar essa props "saleId" para o componente SalesCard, para que eu possa acessar o id da venda
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
        <img src={icon} alt="Notificar" />
      </div>
  );
};

export default NotificationButton;
