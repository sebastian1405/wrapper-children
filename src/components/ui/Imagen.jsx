import "./Imagen.css";

const Imagen = ({ img, type = "normal", alt }) => {
  return (
    <div>
      {
        (type = "logo" ? (
          <div className="text-logo">
            <img
              src={img}
              alt={alt}
              className={type === "logo" ? "logo" : "normal"}
            />
            <p className="text-logo">{alt}</p>
          </div>
        ) : (
          <img src={img} alt={alt} className="normal" />
        ))
      }
    </div>
  );
};

export default Imagen;
