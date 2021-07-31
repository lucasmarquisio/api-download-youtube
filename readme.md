# ADY

ADY api de download de videos do youtube

## funcionalidades

- Baixar videos com a extenção .mp4
- Baixar audio/musicas com a extenção .mp3

## Como Usar

- Baixe a source  `git clone https://github.com/lucasmarquisio/api-download-youtube.git`

- Instale as dependencias ```npm install```

- inicie a api ```npm start```

- Faça uma requisição para https://localhost:3001/download  use os parametros **URL** e **MP3**

- URL passe a url do video que deseja baixar `ex: https://localhost:3001/download?URL=https://youtu.be/Xp6DpKCV0nw`

- MP3 passe um valor booleano **TRUE ou FALSE** para baixar somente o audio/musica _ex: https://localhost:3001/download?URL=https://youtu.be/Xp6DpKCV0nw&MP3=true_


