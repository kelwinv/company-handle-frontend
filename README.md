# Company Handle Frontend 🏢💼

Este é o código-fonte de um aplicativo de frontend para listar empresas, feito com Vite-React, Typescript, Tailwind CSS e Material-UI.

## Como usar 🚀

> Pré-requisitos:
> - Ter [Node.js](https://nodejs.org/pt-br) instalado na versão v18.16.* ou superior.
> - Ter [pnpm](https://pnpm.io/pt/) instalado para usar as dependências.

Siga as etapas abaixo para executar o aplicativo em seu ambiente local:

1. Clonar o repositório:

```bash
git clone https://github.com/kelwinv/company-handle-frontend.git
cd company-handle-frontend
```

2. Instalar as dependências (utilizando pnpm):

```bash
pnpm install
```

3. Configurar a URL do servidor 🛠️

No arquivo `.env`, defina a URL do servidor backend. O valor da chave é `VITE_SERVER_URL`, mas como estamos usando Vite, é necessário adicionar o prefixo "vite". O valor deve ser configurado como:

```
VITE_SERVER_URL=http://localhost:3333
```

Certifique-se de que o servidor backend esteja em execução na URL configurada. Você pode encontrar o código do servidor backend em [company-crud-with-tdd-backend](https://github.com/kelwinv/company-crud-with-tdd-backend).

4. Executar o aplicativo 🏃‍♂️

```bash
pnpm dev
```

O aplicativo será executado localmente em `http://localhost:3000`.

## Funcionalidades ✨

- Listar empresas com paginação.
- Filtrar empresas por nome.
- Ordenar empresas por ID, CNAE, CNPJ, Nome da Empresa ou Nome Fantasia.
- Escolher a direção da ordenação (ascendente ou descendente).

## Tecnologias utilizadas 🛠️

- [Vite](https://vitejs.dev/) - Build tool para desenvolvimento rápido de aplicativos web.
- [Tailwind CSS](https://tailwindcss.com/) - Biblioteca de classes utilitárias CSS para estilização.
- [Material-UI](https://mui.com/) - Biblioteca de componentes React com material design.
- [React](https://react.dev/) - Biblioteca para interface web.
- [Typescript](https://www.typescriptlang.org/) - JavaScript com tipagem.
- [axios](https://axios-http.com/ptbr/) - Biblioteca usada para fazer conexão com a API.

## Contribuindo 🤝

Se você encontrar problemas ou tiver sugestões de melhorias, fique à vontade para abrir uma "issue" neste repositório. Contribuições são sempre bem-vindas! 🙌

## Licença 📄

Este projeto está licenciado sob a licença MIT. Sinta-se à vontade para usá-lo, modificar ou distribuir conforme a necessidade. Consulte o arquivo `LICENSE` para obter mais detalhes.

Espero que isso ajude! Se você tiver mais alguma dúvida ou precisar de mais informações, sinta-se à vontade para perguntar. Bom trabalho! 👍