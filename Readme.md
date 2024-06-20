# Faculdade Senac PE 
# Turma TADS25
# Equipe:
- Alana Pereira
- Caio Queiroz
- Diego Queiroz
- Emmanuel Dantas
- Matheus Menezes
- Rafael Barbosa



# SafeZone

SafeZone é uma aplicação para registro e mapeamento de dados de usuários, incluindo a captura de imagens e localização geográfica.

## Tecnologias Utilizadas

- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend Mobile:** React Native, Expo
- **Bibliotecas Adicionais:** Axios, Expo-Image-Picker, Expo-Location

## Requisitos

- Node.js
- MongoDB
- Expo CLI
- Emulador Android ou dispositivo físico com Expo Go

## Configuração do Backend

1. **Instale as dependências:**
    ```sh
    yarn install
    ```

2. **Inicie o servidor:**
    ```sh
    node server.js
    ```
    O servidor estará rodando na porta 5000 e conectado ao MongoDB.


3. **Inicie o projeto Expo:**
    ```sh
    yarn run android
    ```

5. **Abra o projeto no emulador ou dispositivo físico usando o Expo Go.**


## Endpoints da API

- `POST /api/data/add`
    - Descrição: Adiciona um novo registro.
    - Corpo da requisição:
    ```json
    {
        "name": "Nome do Usuário",
        "matricula": "12345",
        "setor": "Setor",
        "observacoes": "Observações",
        "image": "Base64 ou URI da imagem",
        "latitude": "Latitude",
        "longitude": "Longitude"
    }
    ```

- `GET /api/data/all`
    - Descrição: Obtém todos os registros.

## Utilização do Frontend Mobile

1. **Tela de Adição (AddScreen):**
    - Insira os dados necessários nos campos.
    - Selecione uma imagem da galeria.
    - Capture a localização atual.
    - Salve os dados.

2. **Tela de Mapa (MapScreen):**
    - Visualize a localização capturada em um mapa.

## Possíveis Problemas e Soluções

### Problema: A imagem selecionada não está sendo salva no banco de dados

- Certifique-se de que o campo `image` no seu esquema Mongoose está configurado corretamente para armazenar dados binários ou URLs de imagens.

### Problema: Localização não está correta

- Verifique se as permissões de localização foram concedidas e se o dispositivo está obtendo a localização atual corretamente.

## Contato

Para mais informações ou ajuda, entre em contato com [matheus.moura@edu.pe.senac.br].




