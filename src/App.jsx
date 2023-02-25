import "./App.css";
import Card from "./components/Card";
import tatum from "./assets/tatum.jpeg";
import laPaz from "./assets/laPaz.jpeg";
import elDorado from "./assets/elDorado.jpeg";
import natividad from "./assets/natividad.jpeg";
import laurel from "./assets/laurel.jpeg";
import sherwood from "./assets/sherwood.jpeg";
import santaLucia from "./assets/santa_lucia.jpeg";
import myrtle from "./assets/myrtle.jpeg";
import closter from "./assets/closter.jpeg";
import mckinnon from "./assets/mckinnon.jpeg";

function App() {
  return (
    <div className="App">
      <h1>Local Parks</h1>
      <div className="container">
        <Card
          name="Tatum's Garden"
          address="1 Maryal Dr"
          picture={tatum}
          link="https://www.google.com/maps?rlst=f&client=safari&lqi=ChJsb2NhbCBwYXJrcyBuZWFyYnkiA5ABAUit1bD40KuAgAhaIBABGAAYARgCIhJsb2NhbCBwYXJrcyBuZWFyYnkqAggDkgEKcGxheWdyb3VuZJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSeGJuSXRURTFCRUFFqgENEAEqCSIFcGFya3MoAOABAA&phdesc=e_1spmMYclQ&vet=12ahUKEwi4xIis8K79AhXUDkQIHU3-CycQ8UF6BAgDEFM..i&lei=-Q35Y_jjNdSdkPIPzfyvuAI&cs=1&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KZ18Qp62-I2AMTv19wSKG75c&daddr=1+Maryal+Dr,+Salinas,+CA+93906"
        ></Card>
        <Card
          name="Sherwood"
          address="920 N Main St"
          picture={sherwood}
          link="https://www.google.com/maps?rlst=f&lqi=CgxwYXJrcyBuZWFyYnkiA5ABAUiKpcqt54CAgAhaGhAAGAAYASIMcGFya3MgbmVhcmJ5KgQIAxAAkgEEcGFya5oBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOTE1YUlBkMWRuRUFFqgEuEAEaHxABIht1Wh1494GWh0X2h5IIGjDfEh9dk0ynzvmoBVQqCSIFcGFya3MoAOABAA&phdesc=L46QAcAwmq4&vet=12ahUKEwiX_9WN7K_9AhUnPkQIHXigD7kQ8UF6BAgDEFM..i&lei=wI_5Y5efCKf8kPIP-MC-yAs&cs=1&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=Kbnvz821-I2AMTFhM3pXNrJJ&daddr=920+N+Main+St,+Salinas,+CA+93906"
        ></Card>
        <Card
          name="Closter"
          address="401 Towt St"
          picture={closter}
          link="https://www.google.com/maps?lqi=CgxwYXJrcyBuZWFyYnkiA5ABAUip9Nfw5YCAgAhaGhAAGAAYASIMcGFya3MgbmVhcmJ5KgQIAxAAkgEEcGFya5oBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOeGVpMVVUemRSUlJBQqoBLhABGh8QASIbdVodePeBlodF9oeSCBow3xIfXZNMp875qAVUKgkiBXBhcmtzKADgAQA&phdesc=3lGu5kpiqzc&vet=12ahUKEwjRg4X97q_9AhX6HzQIHWz8BfoQ8UF6BAgDEFM..i&lei=wpL5Y9GaIvq_0PEP7PiX0A8&cs=1&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=Kb_D_8poB5KAMWbgBEDeIKCq&daddr=401+Towt+St,+Salinas,+CA+93905"
        ></Card>
        <Card
          name="Myrtle Court"
          address="32-36 Myrtle Ct"
          picture={myrtle}
          link="https://www.google.com/maps?lqi=CgxwYXJrcyBuZWFyYnkiA5ABAUiHx86H_ayAgAhaGhAAGAAYASIMcGFya3MgbmVhcmJ5KgQIAxAAkgEEcGFya5oBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSdE5YUlVSM05SUlJBQqoBLhABGh8QASIbdVodePeBlodF9oeSCBow3xIfXZNMp875qAVUKgkiBXBhcmtzKADgAQA&phdesc=SsKf0kK8pUs&vet=12ahUKEwjRg4X97q_9AhX6HzQIHWz8BfoQ8UF6BAgDEFM..i&lei=wpL5Y9GaIvq_0PEP7PiX0A8&cs=1&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KcUDkAtkB5KAMU0DR8gVy6QW&daddr=32-36+Myrtle+Ct,+Salinas,+CA+93905"
        ></Card>
        <Card
          name="McKinnon"
          address="1700 McKinnon St"
          picture={mckinnon}
          link="https://www.google.com/maps?lqi=CgxwYXJrcyBuZWFyYnkiA5ABAUjOpJOE5oCAgAhaGhAAGAAYASIMcGFya3MgbmVhcmJ5KgQIAxAAkgEEcGFya5oBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSaGRqaGxha3RuRUFFqgEuEAEaHxABIht1Wh1494GWh0X2h5IIGjDfEh9dk0ynzvmoBVQqCSIFcGFya3MoAOABAA&phdesc=MwVBINb-o1Q&vet=12ahUKEwjRg4X97q_9AhX6HzQIHWz8BfoQ8UF6BAgDEFM..i&lei=wpL5Y9GaIvq_0PEP7PiX0A8&cs=1&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KYlD6aJD_42AMbWm3kwcX_-o&daddr=1700+McKinnon+St,+Salinas,+CA+93906"
        ></Card>
        <Card
          name="Santa Lucia"
          address="302 Elwood St"
          picture={santaLucia}
          link="https://www.google.com/maps?rlst=f&lqi=CgxwYXJrcyBuZWFyYnkiA5ABAUih4Y2siquAgAhaGhAAGAAYASIMcGFya3MgbmVhcmJ5KgQIAxAAkgEEcGFya5oBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSbE5WQnFSRXhSRUFFqgEuEAEaHxABIht1Wh1494GWh0X2h5IIGjDfEh9dk0ynzvmoBVQqCSIFcGFya3MoAOABAA&phdesc=wuTvliS2RUk&vet=12ahUKEwiX_9WN7K_9AhUnPkQIHXigD7kQ8UF6BAgDEFM..i&lei=wI_5Y5efCKf8kPIP-MC-yAs&cs=1&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KVuREfJL_42AMbKnscMzBg5P&daddr=302+Elwood+St,+Salinas,+CA+93906"
        ></Card>
        <Card
          name="El Dorado"
          address="1655 El Dorado Dr"
          picture={elDorado}
          link="https://www.google.com/maps?rlst=f&client=safari&lqi=ChJsb2NhbCBwYXJrcyBuZWFyYnkiA5ABAUjTxtDN5YCAgAhaIBABGAAYARgCIhJsb2NhbCBwYXJrcyBuZWFyYnkqAggDkgEEcGFya5oBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSUE9WbERUREpSUlJBQqoBDRABKgkiBXBhcmtzKADgAQA&phdesc=MQpMDgYuIho&vet=12ahUKEwj2oZvn_K79AhWpCTQIHaCEAn4Q8UF6BAgDEFM..i&lei=Cxv5Y7bwCKmT0PEPoImK8Ac&cs=1&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=Ke27kPJa_42AMTPGhAkZ38tz&daddr=P956%2BQMH,+1655+El+Dorado+Dr,+Salinas,+CA+93906"
        ></Card>
        <Card
          name="Laurel Heights"
          address="Laurel Heights Park"
          picture={laurel}
          link="https://www.google.com/maps/dir/36.6870528,-121.6380928/laurel+heights+park/@36.6766726,-121.6422525,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x808df8a041d6ac51:0xcb979abdef97d54e!2m2!1d-121.6299142!2d36.6829101"
        ></Card>
        <Card
          name="La Paz"
          address="567 Roosevelt St"
          picture={laPaz}
          link="https://www.google.com/maps?rlst=f&client=safari&lqi=ChJsb2NhbCBwYXJrcyBuZWFyYnkiA5ABAUiz6eXC5YCAgAhaIBABGAAYARgCIhJsb2NhbCBwYXJrcyBuZWFyYnkqAggDkgEEcGFya5oBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VReU0weGllVVZSRUFFqgENEAEqCSIFcGFya3MoAOABAA&phdesc=_vD_6LHZyhI&vet=12ahUKEwj2oZvn_K79AhWpCTQIHaCEAn4Q8UF6BAgDEFM..i&lei=Cxv5Y7bwCKmT0PEPoImK8Ac&cs=1&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KcU6Rt-b-I2AMe3xZ-p8IcYc&daddr=567+Roosevelt+St,+Salinas,+CA+93905"
        ></Card>
        <Card
          name="Natividad Creek"
          address="1395 Nogal Dr"
          picture={natividad}
          link="https://www.google.com/maps/dir//natividad+creek+park/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8092074841b86bf3:0xfc4097726734a32?sa=X&ved=2ahUKEwjTpKis66_9AhUOiO4BHWpOAtwQ9Rd6BAhzEAM"
        ></Card>
      </div>
    </div>
  );
}

export default App;
