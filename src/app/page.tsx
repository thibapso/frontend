"use client";

import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const fetchClientes = async () => {
  // Simulando um backend com JSON Placeholder
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

const useHydration = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated;
};

export default function ClientesPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["clientes"],
    queryFn: fetchClientes,
  });

  const hydrated = useHydration();

  if (!hydrated) return null;

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar os clientes</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Clientes</h1>
      <Button className="mb-4">Adicionar Cliente</Button>
      <ul className="border rounded-lg p-4">
        {data.map((cliente: any) => (
          <li key={cliente.id} className="p-2 border-b last:border-none">
            {cliente.name}
          </li>
        ))}
      </ul>
    </div>
  );
}