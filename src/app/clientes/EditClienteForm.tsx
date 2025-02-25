import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/ui/TextInput";
import { Label } from "@/components/ui/Label";

const schema = z.object({
  id: z.number(),
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
});

type FormData = z.infer<typeof schema>;

export default function EditClienteForm({ cliente, onSubmit }: { cliente: FormData; onSubmit: (data: FormData) => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: cliente,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("id")} />
      <div>
        <Label htmlFor="name">Nome</Label>
        <TextInput {...register("name")} placeholder="Nome" />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <TextInput {...register("email")} placeholder="Email" />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <Button type="submit">Salvar Alterações</Button>
    </form>
  );
}