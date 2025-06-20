# 🎟️ Frontend do Sistema de Ingressos

Este é o frontend de um sistema de ingressos utilizado para eventos do Instituto Federal de Educação, Ciência e Tecnologia de São Paulo, Campus Cubatão. Construído com Next.js, esta aplicação oferece uma experiência fluida para gerenciar e adquirir ingressos de eventos.

## 📚 Índice

* [✨ Funcionalidades](#-funcionalidades)
* [🚀 Primeiros Passos](#-primeiros-passos)
* [🔧 Instalação](#-instalação)
* [▶️ Executando a Aplicação](#️-executando-a-aplicação)
* [🔐 Variáveis de Ambiente](#-variáveis-de-ambiente)
* [🤝 Contribuindo](#-contribuindo)
* [📄 Licença](#-licença)

## ✨ Funcionalidades

* **Lista de Eventos:** Visualize todos os eventos disponíveis no IFSP Campus Cubatão.
* **Compra de Ingressos:** Processo simples e seguro para adquirir ingressos.
* **Autenticação de Usuário:** Usuários podem se cadastrar e fazer login para gerenciar suas compras.
* **Design Responsivo:** Otimizado para todos os dispositivos, incluindo desktops, tablets e celulares.

## 🚀 Primeiros Passos

Para começar com o projeto, clone o repositório e siga as instruções de instalação abaixo.

## 🔧 Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/ifspcbt-devspace/ifsp-eventos-web.git
   cd ifsp-eventos-web
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

## ▶️ Executando a Aplicação

Para rodar a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

## 🔐 Variáveis de Ambiente

Certifique-se de configurar as seguintes variáveis de ambiente antes de executar a aplicação:

```plaintext
NEXT_PUBLIC_API_BASE_URL=http://localhost:8091/v1
IRON_SESSION_PASSWORD=SUA_SENHA_SECRETA
NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY=SUA_CHAVE_PUBLICA
```

> Essas variáveis devem ser colocadas no arquivo `.env.local`.

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, certifique-se de basear seus *pull requests* na branch `develop`.

## 📄 Licença

Este projeto está licenciado sob a Licença AGPL-3.0.

[![Compre um café para mim](https://img.shields.io/badge/Buy%20me%20a%20coffee-donate-yellow?logo=buymeacoffee\&style=for-the-badge)](https://buymeacoffee.com/oleonardosilva)
