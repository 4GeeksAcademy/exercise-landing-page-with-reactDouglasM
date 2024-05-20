import React from "react";
import Card from "./Card";

const ListCard = () => {
    const image1 = "https://img.asmedia.epimg.net/resizer/v2/CJ43YIQ4WZEQBMWV72GCBYYBI4.jpg?auth=9c45e8cec2ab227177c79aa25c2c0edfb5d1d70bebdc2bd30637ad150f91a05b&width=644&height=362&smart=true";
    const image2 = "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/10/call-duty-mobile_8.jpg?tf=3840x"
    const image3 = "https://i.blogs.es/19cf2f/call-duty-1-/1366_2000.jpeg"
    const image4 = "https://sm.ign.com/ign_es/feature/t/the-10-bes/the-10-best-call-of-duty-campaigns_csre.jpg"

    const title1 = "Call of Duty: Black Ops"
    const title2 = "Call of Duty: Black Ops Cold War"
    const title3 = "Call of Duty: Modern Warfare"
    const title4 = " Call of Duty: Modern Warfare 2"

    const content1 = "Es el séptimo título de la serie Call of Duty y el tercer título de la serie desarrollado por Treyarch, siendo la secuela directa de su anterior título, Call of Duty: World at War. Fue lanzmente el 9 de noviembre de 2010, y en Japón, el 18 de noviembre de 2010."
    const content2 = " Es la quinta entrega Black Ops y el decimoséptimo Call of Duty. Cronológicamente el juego está ambientado después de los acontecimientos de Call of Duty: Black Ops. El jue: Modern Warfare y Call of Duty: Warzone. El juego fue lanzado el 13 de noviembre de 2020."
    const content3 = " El videojuego, precedido por Call of Duty 3, es el cuarto título de la serie Call of Duty y el cuarto de esta misma en ser título principal. Fue lanzado para Microsoft Windows, Macintosh, PlayStation 3, Xbox 360, Wii y Nintendo DS . El juego fue lanzado en Nort"
    const content4 = "Es la sexta entrega de la serie Call of Duty y sucesora directa de Modern Warfare, cuarto de la serie.5​ Salió a la venta el 10 de noviembre de 2009 y fue distribuida por Activision. Con más de 20 millones de copias vendidas en total entre: Xbox 360, Playstation ​"
    
    const buttonName = "Start Game"
    return (
        <div className="container-fluid">
            <div className="row h-100">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <Card image={image1} title={title1} content={content1} buttonName={buttonName} />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <Card image={image2} title={title2} content={content2} buttonName={buttonName} />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <Card image={image3} title={title3} content={content3} buttonName={buttonName} />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <Card image={image4} title={title4} content={content4} buttonName={buttonName} />
                </div>
            </div>
        </div>
    )
};

export default ListCard;