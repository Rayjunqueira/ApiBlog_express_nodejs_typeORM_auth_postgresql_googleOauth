# Projeto Blog Backend

# Sobre o Projeto

Projeto de API completa de um blog desenvolvido em Nodejs com o framework Express. Nesse projeto inclui algumas features como:
 
 <p> ● CRUD completo de usuário.</p>
 ●  Autenticação completa de usuário com JWT.</p>
 ●  Segurança com criptografia de senha e dados sensíveis com bcryptjs.</p>
 ●  Possibilidade de recuperação de senha de usuário de forma segura com JWT e bcryptjs e nodemailer.</p>
 ● Middlewares de autenticação JWT de usuário e de autorização de usuário admin.</p>
 ●  CRUD de posts e comentários.</p>
 ●  Migração completa do banco de dados. </p>


# Tecnologias usadas

 <p>◼ Nodejs </p>
 ◼ Express </p>
 ◼ TypeORM </p>
 ◼ Postgresql </p>
 ◼ Nodemailer </p>
 ◼ JWT </p>
 ◼ Nodemon </p>
 ◼ Dotenv </p>
 ◼ Cors </p>
 ◼ Body-Parser </p>

# Configurar Banco de Dados TypeORM

```
import { DataSource } from "typeorm"
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.DATABASE_PORT as number | undefined

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: port,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,

})
```

```
DATABASE_HOST = Host 
DATABASE_USERNAME = Usuário de seu banco de dados
DATABASE_PASSWORD = Senha de seu banco de dados
DATABASE_NAME = Nome do seu banco de dados
```

Pasta de diretório de migrations e entidades.

```
entities: [`${__dirname}/../entities/*.{ts,js}`],
migrations: [`${__dirname}/migrations/*.{ts,js}`],
```


# Criando migrations

1 - Crie uma nova entidade

```
@Entity('example')
export class Example {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    test: string;
    }
}
```
2 - Gerar migration

    npm run migration:generate

3 - Rodar migration

     npm run migration:run
     

# Configurar Sistema de envio de e-mail via Nodemailer Para recuperação de senha

```
import nodemailer from 'nodemailer';

type EmailType = {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
}

const port = process.env.EMAIL_PORT as number | undefined;

const sendEmail = async ({ from, to, subject, text, html }: EmailType ) => {
    try {
        const transport = nodemailer.createTransport({
            host: process.env.EMAIL_HOST as string,
            port: port,
            auth: {
              user: process.env.EMAIL_AUTH_USER as string,
              pass: process.env.EMAIL_AUTH_PASS as string,
            }
        });

        await transport.sendMail({
            from: from,
            to: to,
            subject: subject,
            text: text,
            html: html,
        })
    
        console.log('Email send succesfully')
        
    } catch (err) {
        console.log(err);
    }
}

export default sendEmail;
```

```
EMAIL_PORT = Porta de e-mail
EMAIL_HOST = Hospedagem E-mail
EMAIL_AUTH_USER = Usuário E-mail
EMAIL_AUTH_PASS = Senha E-mail
```
# Rodando aplicação na sua máquina

1 - Clone o repositório

    git clone https://github.com/Routfin/BlogApi_express_nodejs_postgresql_typeorm.git
    
2 - Instalar os pacotes NPM

    npm install 
    
3 - Rodar aplicação em nodemon/localhost
    
    npm run dev
 

## Contribua com o projeto

1 - Crie um fork do projeto.

2 - git remote add origin urlDoRepositórioDoProjeto.

3 - Faça commits para aprimorar o projeto.

4 - Faça push dessa branch para seu projeto no GitHub.

5 - Abra um Pull Request
