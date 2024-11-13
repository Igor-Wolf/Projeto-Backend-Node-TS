# Podcast Manager

### Descrição
Um app ao estilo netflix, aonde possa centralizar diferentes episódios
de podcasts separados por categoria

### Domínio 
Podcasts feitos em vídeo


### Features
-Listar os podcasts em sessões de categorias
    - [saúde, fitness, mentalidade, humor]
-Filtrar episódios por nome de podcast


## Como 

#### Feature:
- Listar os episódios podcasts em sessões de categorias
### Como vou implementar:

    Vou retornar em uma api rest(json) para que consiga alimentar um frontend, retornar o nome do podcast, nome do episódio, imagem de capa, link

    ```js
   [
   {
        podcastName:"Ei Nerd Games";
        episode: "TUDO SOBRE ELDEN RING E FROMSOFTWARE - VICTOR KRATOS E ZERO #EiNerdGames 035 ",
        videoId: "7HscusF847Y",
        cover: "https://i.ytimg.com/vi/7HscusF847Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3MrcZn_rfoVV5spiqpLYWPSVCZQ",
        link: "https://www.youtube.com/watch?v=7HscusF847Y",
        category:["entretenimento", "nerd", "games"]
    },
   ]
     ```
