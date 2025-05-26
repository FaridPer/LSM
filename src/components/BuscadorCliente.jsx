import { useState } from 'react';

function normalizar(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function buscar(consulta, datos) {
  const norm = normalizar(consulta);
  return datos.filter(({ palabra, sinonimos = [] }) => {
    return [palabra, ...sinonimos].some(p => normalizar(p).includes(norm));
  });
}

export default function BuscadorCliente({ datos }) {
  const [query, setQuery] = useState("");
  const resultados = buscar(query, datos);

  return (
    <div>
      <input
        placeholder="Buscar palabra..."
        onInput={(e) => setQuery(e.target.value)}
        value={query}
      />
      <div>
        {resultados.length > 0 ? (
          resultados.map((p, i) => (
            <div key={i}>
              <h3>{p.palabra}</h3>
              <video src={p.video} controls width="300" />
            </div>
          ))
        ) : (
          <p>No se encontraron coincidencias.</p>
        )}
      </div>
    </div>
  );
}
