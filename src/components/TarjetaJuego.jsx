function TarjetaJuego ({gameName, developer, gender, description, imageSrc }) {  
    return (    
        <>
        <div> 
            <img src={imageSrc} alt="Imagen"/>
        </div>
        <div className="info-tarjeta-juego">
            <h2> {gameName}</h2>
            <p>Desarrollador: {developer}</p>
            <p>Género: {gender}</p>
            <p>Descripción: {description}.</p>

        </div>
        </>
    );
}  
export default TarjetaJuego;