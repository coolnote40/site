const videos = [
    {
        title: "Spend The Night",
        videoId: "3HORpYovGDM",
        description: "Une performance emblematique de The Cool Notes a l'esthetique tres soignee.",
    },
    {
        title: "My Tune",
        videoId: "wCLZeJiUjr8",
        description: "Un clip rare de 1978 publie par la chaine officielle de Cool Notes.",
    },
    {
        title: "Why Not",
        videoId: "MQiyX1ciYvA",
        description: "La version album originale, avec une couleur soul-funk chaude et classique.",
    },
    {
        title: "No... No, No, No, No",
        videoId: "68rTuR5S1FU",
        description: "Une face B pleine d'energie, avec un parfum vintage pour le dancefloor.",
    },
    {
        title: "Have a Good Forever",
        videoId: "quGwGemMM24",
        description: "L'ouverture d'une playlist album complete pour une ecoute plus longue.",
    },
    {
        title: "Star of the Show",
        videoId: "_GoXFZz00zA",
        description: "Un titre des annees 80 issu d'une playlist des plus grands succes.",
    },
];

const videoGrid = document.querySelector("#video-grid");

videoGrid.innerHTML = videos
    .map((video, index) => {
        const watchUrl = `https://www.youtube.com/watch?v=${video.videoId}`;
        const thumbnailUrl = `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`;

        return `
            <article class="video-card" style="animation-delay: ${index * 120}ms">
                <div class="video-card__frame">
                    <img class="video-card__thumb" src="${thumbnailUrl}" alt="Miniature de ${video.title}" loading="lazy">
                    <a class="video-card__overlay" href="${watchUrl}" target="_blank" rel="noreferrer" aria-label="Regarder ${video.title} sur YouTube">
                        <span class="video-card__play" aria-hidden="true"></span>
                    </a>
                </div>
                <div class="video-card__body">
                    <h3 class="video-card__title">${video.title}</h3>
                    <p class="video-card__meta">${video.description}</p>
                    <a class="video-card__link" href="${watchUrl}" target="_blank" rel="noreferrer">Voir sur YouTube</a>
                </div>
            </article>
        `;
    })
    .join("");