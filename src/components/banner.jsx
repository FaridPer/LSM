// components/CarruselProgramaSkeleton.jsx
import { useEffect, useState } from "react";
import './EsqueletoIndex.css';
import { SITE_BASE } from "../config";

export default function CarruselProgramaSkeleton() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 5000); // Simula carga
    return () => clearTimeout(t);
  }, []);

  if (!loaded) {
    return (
      <div  class="img-fluid align-right">
        <img src={`${SITE_BASE}`+'/welcome.jpg'} alt="Bienvenida" height={"85px"} />
      </div>
    );
  }

  // Si ya tienes el contenido en Index.astro, simplemente no renderices nada más
return (
      <div  class="img-fluid align-right">
        <img src={`${SITE_BASE}`+'/welcome.jpg'} alt="Bienvenida" />
      </div>
);
}
