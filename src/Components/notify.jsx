import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/notify.css";
export const Notify = () => {
  const { Name } = useParams();
  let nombre = { Name }.Name.toString();
  const [timeLeft, setTimeLeft] = useState(6);
  const Navigate = useNavigate();
  useEffect(() => {
    if (timeLeft === 0) return Navigate("/");
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  });

  const mystyle={
    background: 'linear-gradient(to right, #2c2c2c, #000000, #505050)'
  }

  return (
    <main style={{mystyle}}>
      <h1 className="rubik-h1">¡gracias {nombre}!</h1>
      <h2 className="rubik-h2">
        Tu solicitud esta siendo estudiada para brindarte la mejor solución.
      </h2>
      {timeLeft !== 1 ? (
        <p className="rubik-p6">Volveras al inicio en {timeLeft} segundos</p>
      ) : (
        <p className="rubik-p6">Volveras al inicio en un segundo</p>
      )}
    </main>
  );
};
