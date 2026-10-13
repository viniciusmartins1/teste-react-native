### APP  - Catálogo de Conteúdos

Esse APP tem o intuito de renderizar uma listagem de produtos, com funcionalidade de favoritar ou desfavoritar um produto e acessar a lista de favoritos. O projeto foi desenvolvido utilizando React Native, Expo (bare workflow) e React Navigation.

#### Preparando o ambiente

> Para rodar o projeto localmente é necessário fazer o clone do repositório ou fazer o download aqui pelo GitHub

#### 📱Instalação
É necessário ter o Node.js (a versão utilizada no projeto foi a 22) instalado para rodar o projeto, além de alguma IDE como o Visual Studio Code

```bash
git  clone  https://github.com/viniciusmartins1/teste-react-native
cd  teste-react-native
```

Instale as bibliotecas necessárias  

```bash
npm install
```

#### 📱 Variáveis de Ambiente
Nesse projeto foi utilizada uma API com os dados necessários para o desenvolvimento do projeto, porém não irei disponibilizá-la aqui. Entretanto, é necessário adicionar a variável de ambiente com o endereço da API.

  Para isso, altere o nome do arquivo `.env.example` apenas para `.env` e altere o valor da variável `EXPO_PUBLIC_API_URL`
```text
teste-react-native/
├── src/
├── .env.example
```
- Obs: Para que a conexão com  a API funcione é necessário trocar o endereço para o IP do seu computador ou para **localhost**, caso esteja utilizando o Expo Go. 
	- Caso você tenha problemas com essa parte [acesse esse link](https://stackoverflow.com/questions/49370747/network-error-with-axios-and-react-native).

#### 📱 Executando o projeto
Para rodar o projeto recomendo a utilização do Expo Go disponível na PlayStore e na AppStore. Outra alternativa é a utilização de um emulador, como o Android Studio.

```bash
npm run start
```
ou 
```bash
npx expo start
```
O próprio Expo vai gerar um QR Code que pode ser escaneado e uma URL que pode ser acessada pelo navegador do smartphone.

