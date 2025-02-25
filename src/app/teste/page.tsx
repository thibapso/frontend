"use client";

import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

export default function TestePage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchData,
  });

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar os dados</p>;

  return (
    <div>
      <h1>Usuários</h1>
      <ul>
        {data.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
