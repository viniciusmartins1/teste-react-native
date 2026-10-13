
### APP - Catálogo de Conteúdos

  

Esse APP tem o intuito de renderizar uma listagem de produtos, com funcionalidade de favoritar ou desfavoritar um produto e acessar a lista de favoritos. O projeto foi desenvolvido utilizando React Native, Expo (bare workflow) e React Navigation.

  
  

[APP - rodando com Expo Go](https://drive.google.com/drive/folders/1Re1g4PDknuoosJDiDHFX2jdzLfPJ0LT9?usp=sharing)

  

#### Preparando o ambiente

> Para rodar o projeto localmente é necessário fazer o clone do repositório ou fazer o download aqui pelo GitHub

#### 📱Instalação

É necessário ter o Node.js (a versão utilizada no projeto foi a 22) instalado para rodar o projeto, além de alguma IDE como o Visual Studio Code
```bash
git  clone  https://github.com/viniciusmartins1/teste-react-native
cd  teste-react-native
```
Após isso, instale as dependências necessárias com o seguinte comando:
```bash
npm  install
```
#### 📱 Variáveis de Ambiente

Nesse projeto foi utilizada uma API local com os dados necessários para o desenvolvimento do projeto, porém não irei disponibilizá-la aqui. Entretanto, se você possui acesso a API local, será necessário adicionar a variável de ambiente com a API_URL.

  

Para isso, altere o nome do arquivo `.env.example` apenas para `.env` e altere o valor da variável `EXPO_PUBLIC_API_URL`

```text
teste-react-native/
├── src/
├── .env.example
```

- Obs: Para que a conexão com a API local funcione é necessário trocar o endereço para o IP do seu computador ou para **localhost**, caso esteja utilizando o Expo Go.
- No meu caso, conseguir rodar apenas quando utilizei o IP do computador ao invés de **localhost**.

	- IP: `http://[SEU_IP]:[PORTA]`

	- localhost: `http://localhost:[PORTA]`

- Caso mesmo assim você não consiga configurar tente [acessar esse link](https://stackoverflow.com/questions/49370747/network-error-with-axios-and-react-native).

  
  

#### 📱 Executando o projeto

Com a variável do endereço da API local configurada, o próximo passo é rodar o projeto. Para isso,  recomendo a utilização do Expo Go disponível na PlayStore e na AppStore. Você pode baixá-lo diretamente no seu smarphone. Outra alternativa é a utilização de um emulador, como o Android Studio.

- Obs: No caso de iPhones, pode ser necessário a criação de uma conta no Expo Go. Caso isso aconteça, será preciso logar na IDE para ver o aplicativo em funcionamento. Você pode utilizar o comando `npx expo login` para logar na IDE.

  

```bash

npm  run  start

```

ou

```bash

npx  expo  start

```

Após esse comando, o próprio Expo vai gerar um QR Code que pode ser escaneado e uma URL que pode ser acessada pelo navegador do smartphone. Ambos os links direcionam para o aplicativo Expo Go.