# FoundationOS

**Sistema de gerenciamento administrativo e automação para comunidades de roleplay baseadas na Fundação SCP, com integração entre Discord, Roblox e serviços de infraestrutura.**

**Status:** Em desenvolvimento

## Sobre o projeto

O FoundationOS é um projeto de software desenvolvido com o objetivo de centralizar e automatizar processos administrativos de uma comunidade de roleplay inspirada no universo SCP Foundation.

A proposta é substituir tarefas manuais por um sistema integrado, capaz de gerenciar informações de usuários, hierarquias, departamentos, registros administrativos e fluxos de aprovação.

O projeto também funciona como uma experiência prática de desenvolvimento de software, envolvendo arquitetura de sistemas, APIs, bancos de dados, automação e administração de servidores.

## Tecnologias utilizadas

- **TypeScript e Node.js:** desenvolvimento da aplicação.
- **Discord.js:** integração e interação com o Discord.
- **Prisma ORM:** modelagem e acesso aos dados.
- **PostgreSQL:** armazenamento persistente.
- **Redis:** suporte à infraestrutura da aplicação.
- **Docker e Docker Compose:** organização e execução dos serviços.
- **Roblox:** plataforma prevista para integração administrativa.

## Funcionalidades

### Base implementada

- Inicialização e autenticação do bot no Discord.
- Registro e processamento de comandos slash.
- Estrutura de conexão com PostgreSQL e Redis.
- Modelagem inicial de usuários e registros administrativos.
- Comandos de informações, hierarquia e consulta de perfil.
- Consulta inicial de advertências.
- Estrutura de migrations para evolução do banco de dados.

### Planejamento e desenvolvimento

- Sincronização administrativa entre Discord e Roblox.
- Gerenciamento de promoções, rebaixamentos e suspensões.
- Sistema de advertências e medidas disciplinares.
- Controle de permissões por hierarquia e departamento.
- Fluxos de aprovação administrativa.
- Gerenciamento de medalhas, certificados e licenças.
- Painéis interativos de aplicações departamentais.
- Registro e auditoria de ações administrativas.

As funcionalidades estão em diferentes estágios de implementação. A presença de uma funcionalidade no planejamento não significa que ela já esteja disponível.

## Arquitetura

O sistema utiliza uma aplicação principal em Node.js/TypeScript responsável por processar eventos e comandos do Discord e coordenar os módulos administrativos.

O PostgreSQL mantém os dados persistentes, enquanto o Redis compõe a infraestrutura de suporte. A execução dos serviços é organizada por meio de Docker Compose.

A arquitetura foi planejada para permitir a expansão gradual das funcionalidades e a integração com sistemas externos.


## Estrutura do repositório

O FoundationOS utiliza uma arquitetura modular, com o código-fonte organizado diretamente na raiz do repositório.

```text
FoundationOS/
├── src/
│   ├── config/           # Configurações da aplicação
│   ├── database/         # Integração com PostgreSQL e Prisma
│   ├── discord/          # Integração com o Discord
│   │   ├── commands/     # Comandos do bot
│   │   └── events/       # Eventos do Discord
│   ├── redis/            # Integração com Redis
│   └── index.ts          # Ponto de entrada
│
├── prisma/
│   ├── migrations/       # Histórico das migrations
│   └── schema.prisma     # Modelagem do banco
│
├── docker-compose.yml    # Infraestrutura Docker
├── package.json          # Dependências e scripts
├── package-lock.json
├── prisma.config.ts      # Configuração do Prisma
├── tsconfig.json         # Configuração do TypeScript
└── README.md             # Documentação do projeto
```

A aplicação é desenvolvida com TypeScript e Node.js, utilizando Docker Compose para organizar os serviços. Credenciais e configurações sensíveis são mantidas fora do controle de versão.


A aplicação é desenvolvida com TypeScript e Node.js, utilizando Docker Compose para organizar os serviços. As credenciais e configurações sensíveis são mantidas fora do controle de versão.

## Desenvolvimento

O FoundationOS é um projeto em evolução contínua. Novos módulos são desenvolvidos e incorporados gradualmente, priorizando organização, manutenção do código e consistência das regras administrativas.

O código disponibilizado representa o estágio atual de desenvolvimento e não constitui uma versão final pronta para produção ou implantação independente.

## Autor

**MarcusViniciusPF**

Projeto independente de desenvolvimento de software e automação.

GitHub: https://github.com/MarcusViniciusPF

---

*FoundationOS é um projeto independente inspirado em comunidades de roleplay da Fundação SCP.*
