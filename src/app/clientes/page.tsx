"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AddClienteForm from "./AddClienteForm";
import EditClienteForm from "./EditClienteForm"; // Verifique se o caminho está correto

const fetchClientes = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

export default function ClientesPage() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [editingCliente, setEditingCliente] = useState<any | null>(null);

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

  const handleAddCliente = (newCliente: any) => {
    setData([...data, newCliente]);
  };

  const handleEditCliente = (updatedCliente: any) => {
    setData(
      data.map((cliente) =>
        cliente.id === updatedCliente.id ? updatedCliente : cliente
      )
    );
    setEditingCliente(null);
  };

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar os clientes</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Clientes</h1>
      <Link href="/ativos">
        <Button className="mb-4">Ver Ativos</Button>
      </Link>
      {editingCliente ? (
        <EditClienteForm
          cliente={editingCliente}
          onSubmit={handleEditCliente}
        />
      ) : (
        <AddClienteForm onSubmit={handleAddCliente} />
      )}
      <ul className="border rounded-lg p-4">
        {data.map((cliente: any) => (
          <li
            key={cliente.id}
            className="p-2 border-b last:border-none flex justify-between items-center"
          >
            {cliente.name}
            <Button onClick={() => setEditingCliente(cliente)}>Editar</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
