"use client";

import { useEffect, useState } from "react";

interface Cliente {
  id: number;
  name: string;
  email: string;
}

const fetchClientes = async (): Promise<Cliente[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

export default function Page() {
  const [data, setData] = useState<Cliente[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchClientes()
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar os clientes</p>;

  return (
    <div>
      <h1>Clientes</h1>
      <ul>
        {data.map((cliente) => (
          <li key={cliente.id}>{cliente.name}</li>
        ))}
      </ul>
    </div>
  );
}
