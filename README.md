# SMD
 Sistema de Monitoramento de Doença

## Organização

SMD/
├── node_modules/
├── src/
│   ├── controllers/
│   │   └── exampleController.js
│   ├── models/
│   │   └── exampleModel.js
│   ├── routes/
│   │   └── exampleRoutes.js
│   ├── config/
│   │   └── database.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── server.js
│   └── app.js
├── .env
├── .gitignore
├── package.json
└── README.md

## CRUD

### CRUD Ticket
> Rota /ticket # isso vai representar os dados do ticket.
> Rota /criarTicket # isso vai representar o "nascimento de uma doença".
> Rota /updateTicket # isso vai representar atualização do ticket.
> Rota /deleteTicket # isso vai representar Delete do ticket.

#### T - Doença
    Classificação de doença - azul, verde, amarelo, vermelho

### CRUD User
> Rota /user # isso vai representar os dados do usuário.
> Rota /criarUser # isso vai representar a criação do usuário.
> Rota /updateUser # isso vai representar atualização do usuário.
> Rota /deleteUser # isso vai representar Delete do User.


## Cadastro
    Cadastro acontece logo após o questionário, e após o cadastro, o usuário recebe um ticket com todos os dados agregados a ele.

> após o paciente inserir os dados de criação de ticket (levantamento de sintomas), esse paciente fará um cadastro simplificado com o objetivo de receber esse ticket no seu nome. Após o levantamento final, receberá uma classificação de urgência e feedback final sobre sua situação!

