# Frontend - Gerenciamento de Clientes e Ativos Financeiros

Este repositório contém o frontend da aplicação de gerenciamento de clientes e ativos financeiros. Desenvolvido com **Next.js**, **React Query**, **React Hook Form** e **ShadCN**, ele consome a API do backend para listar e gerenciar clientes e ativos.

---

## **Tecnologias Utilizadas**

- **Next.js**: Framework React para construção de interfaces.
- **React Query**: Para gerenciamento de chamadas à API.
- **React Hook Form**: Para validação e gerenciamento de formulários.
- **ShadCN**: Biblioteca de componentes UI.
- **TypeScript**: Linguagem principal para desenvolvimento.

---

## **Como Executar o Projeto**

### **Pré-requisitos**
1. **Node.js**: Versão 16 ou superior.
2. **npm** ou **yarn**: Gerenciadores de pacotes.

### **Passo a Passo**

#### 1. Clone o repositório
```bash
git clone https://github.com/thibapso/case-frontend
cd frontend
```

#### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

#### 3. Configure as variáveis de ambiente
Crie um arquivo `.env.local` na raiz do projeto e adicione:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

#### 4. Inicie o servidor
```bash
npm run dev
# ou
yarn dev
```
O frontend estará rodando em **http://localhost:3001**.
