## Projeto Backend - Sistema de Angariação de Imóveis

# Descrição

Este projeto é um backend desenvolvido com Node.js e o framework Express. Ele lida com dois repositórios em JSON: Users.json e Imoveis.json. Este backend foi criado para servir como base para um frontend de um sistema de angariação de imóveis.

Este projeto foi realizado como atividade avaliativa (AT) da pós-graduação em MIT Desenvolvimento Fullstack.

# Endpoints

# Usuários
    GET /users: Lista todos os usuários.

        URL: http://localhost:3333/users

    GET /users/:id: Lista um usuário específico através do seu ID.

        URL: http://localhost:3333/users/:id

    POST /users: Adiciona um novo usuário.

        URL: http://localhost:3333/users

        Corpo da requisição (JSON):
        json
        Copiar código
        {
            "name": "Nome do Usuário",
            "email": "email@example.com",
            "phone": "123456789"
        }

    DELETE /users/:id: Deleta um usuário específico através do seu ID.

        URL: http://localhost:3333/users/:id

# Imóveis
    GET /imoveis: Lista todos os imóveis.

        URL: http://localhost:3333/imoveis

    GET /imoveis/:id: Lista um imóvel específico através do seu ID.

        URL: http://localhost:3333/imoveis/:id

    POST /imoveis: Adiciona um novo imóvel.

        URL: http://localhost:3333/imoveis

    Corpo da requisição (JSON):
        json
        {
            "tipo": "Ponto Comercial",
            "comercializacao": "Aluguel",
            "endereco": "Rua Da Paz, 18",
            "bairro": "Bairro 3",
            "cidade": "Cidade 3",
            "img": "https://triunfo.pe.gov.br/pm_tr430/wp-content/uploads/2018/03/sem-foto.jpg",
            "nome": "",
            "telefone1": "999999999",
            "telefone2": "999999999",
            "userRef": 2
        }

    PUT /imoveis/:id: Atualiza um imóvel específico através do seu ID.

        URL: http://localhost:3333/imoveis/:id

    Corpo da requisição (JSON):
    json
    {
        "tipo": "Ponto Comercial",
        "comercializacao": "Aluguel",
        "endereco": "Rua Da Paz, 18",
        "bairro": "Bairro 3",
        "cidade": "Cidade 3",
        "img": "https://triunfo.pe.gov.br/pm_tr430/wp-content/uploads/2018/03/sem-foto.jpg",
        "nome": "",
        "telefone1": "999999999",
        "telefone2": "999999999",
        "userRef": 2
    }

# Instalação

# Clone o repositório:
    git clone https://github.com/leandroperego/backend-sistema-angariador

# Navegue até o diretório do projeto:
    cd SISTEMA-ANGARIADOR-COM-BACKEND
    
# Instale as dependências:
    npm install

# Uso

    Inicie o servidor: npm start

O backend estará disponível em http://localhost:3333.

# Tecnologias Utilizadas
    Node.js
    Express