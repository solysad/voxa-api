# Voxa API

Backend da plataforma Voxa, desenvolvido com NestJS e PostgreSQL.

A API é responsável por autenticação, gerenciamento de usuários, debates, propostas, votos e demais funcionalidades da plataforma.

---

## Sobre o projeto

A Voxa nasceu da ideia de incentivar debates centrados em propostas e argumentos, aproximando cidadãos da construção de políticas públicas.

Esta API foi projetada para oferecer uma arquitetura organizada, escalável e segura, servindo como núcleo de comunicação entre os clientes da plataforma e o banco de dados.

---

## Tecnologias

- NestJS
- Node.js
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT
- Argon2
- Class Validator
- Class Transformer

---

## Funcionalidades implementadas

- Cadastro de usuários
- Login
- Autenticação JWT
- Hash de senhas com Argon2
- Refresh Token
- Gerenciamento de perfis
- Integração com PostgreSQL
- ORM Prisma
- Estrutura modular do NestJS

---

## Funcionalidades em desenvolvimento

- Sistema de debates
- Sistema de propostas
- Sistema de votação
- Comentários
- Notificações
- Feed personalizado
- Sistema de denúncias

---

## Estrutura do projeto

```text
src/

├── auth/
├── users/
├── debates/
├── proposals/
├── common/
├── prisma/
└── main.ts
```

---

## Arquitetura

A aplicação segue a arquitetura modular recomendada pelo NestJS.

Cada domínio da aplicação possui seus próprios módulos, serviços e controladores, facilitando manutenção e escalabilidade.

---

## Banco de Dados

Atualmente a aplicação utiliza PostgreSQL com Prisma ORM.

Principais entidades:

- User
- Debate
- Proposal
- Vote
- Comment
- Notification

---

## Segurança

A API utiliza:

- JWT para autenticação
- Argon2 para hash de senhas
- Guards do NestJS
- Validação de DTOs
- Variáveis de ambiente para informações sensíveis

---

## Decisões de Arquitetura

### Por que NestJS?

Optei pelo NestJS devido à sua arquitetura modular, suporte nativo à injeção de dependências e facilidade para escalar aplicações de médio e grande porte.

### Por que Prisma?

O Prisma oferece tipagem forte, excelente integração com TypeScript e simplifica a manutenção de consultas complexas ao banco de dados.

### Por que PostgreSQL?

Escolhi o PostgreSQL por sua robustez, suporte a relacionamentos complexos e confiabilidade para aplicações que exigem integridade dos dados.

### Por que JWT?

A autenticação baseada em JWT permite uma arquitetura stateless, facilitando a integração entre diferentes clientes da plataforma, como a aplicação web e um futuro aplicativo móvel.

## Como executar

### Clonar

```bash
git clone https://github.com/solysad/voxa-api.git
```

### Instalar

```bash
npm install
```

### Configurar ambiente

Criar um arquivo `.env`:

```env
DATABASE_URL=

JWT_SECRET=

JWT_EXPIRES_IN=
```

### Prisma

```bash
npx prisma migrate dev

npx prisma generate
```

### Rodar

```bash
npm run start:dev
```

---

## Roadmap

- [x] Autenticação
- [x] Integração com PostgreSQL
- [x] Prisma
- [ ] Debates
- [ ] Propostas
- [ ] Sistema de votos
- [ ] Upload de imagens
- [ ] Testes automatizados
- [ ] Documentação Swagger

---

## Status

🚧 Projeto em desenvolvimento (MVP)

---

## Autor

João Pedro de Abreu Silva

GitHub:
https://github.com/solysad

LinkedIn:
https://www.linkedin.com/in/joão-pedro-silva-731b2141b