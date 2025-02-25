"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const ativos = [
  { id: 1, name: "Ativo 1" },
  { id: 2, name: "Ativo 2" },
  { id: 3, name: "Ativo 3" },
];

export default function AtivosPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ativos</h1>
      <Link href="/clientes">
        <Button className="mb-4">Ver Clientes</Button>
      </Link>
      <ul className="border rounded-lg p-4">
        {ativos.map((ativo) => (
          <li key={ativo.id} className="p-2 border-b last:border-none">
            {ativo.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
