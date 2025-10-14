# Guia de Instalação e Configuração

## Para que serve cada ferramenta
- XAMPP: Ambiente de desenvolvimento que inclui PHP, MySQL e Apache.
- Composer: Gerenciador de dependências do PHP.
- NVM (Node Version Manager): Para gerenciar a versão do Node.js.
- Git Bash: Terminal padrão para comandos Git no Windows.

## Requisitos de software
Instale as ferramentas na seguinte ordem:
1. XAMPP baixado e instalado com as dependências PHP e Apache
2. Composer baixado e instalado sem ser na versão dev
3. Nvm (Node Version Manager)
4. Git Bash

## Configuração de ambiente
Passo a passo para a configuração do projeto:
- Iniciar os servidores e configurar o Node.js:
1. Abra o painel do XAMPP e inicie os módulos Apache e MySQL
2. Certifique-se de estar utilizando a versão 20.19.4 do nvm:
node -v
Caso não seja a 20.19.4, execute:
```
nvm use 20.19.4
```
- Clonar o projeto e instalar dependências:
3. Clone o projeto no github
4. Instale as dependências na raiz do projeto
```
composer install
npm install
```
- Configuração do banco de dados:
5. Abra o XAMPP e vá em Admin do MySQL
6. Crie uma base de dados no phpMyAdmin - nessa parte do projeto ainda não precisa de tabelas - usando o nome de meu-icronograma
7. Duplique o arquivo .env.example e renomeie para .env
8. Banco configurado, execute as migrações para criar as tabelas no banco:
```
php artisan migrate
```
Caso não exista um banco com esse nome, digite "yes" quando solicitado para criá-lo.

9. Gere a chave de segurança:
```
php artisan key:generate
```
10. Abra dois terminais e execute:
```
php artisan serve
p/o servidor do laravel
```
```
npm run dev
p/o servidor do react.js
```
