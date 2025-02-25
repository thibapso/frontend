import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/ui/TextInput";
import { Label } from "@/components/ui/Label";

const schema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
});

type FormData = z.infer<typeof schema>;

export default function AddClienteForm({
  onSubmit,
}: {
  onSubmit: (data: FormData) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const nameValue = watch("name");
  const emailValue = watch("email");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="name">Nome</Label>
        <TextInput {...register("name")} value={nameValue} placeholder="Nome" />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <TextInput
          {...register("email")}
          value={emailValue}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <Button type="submit">Adicionar Cliente</Button>
    </form>
  );
}
