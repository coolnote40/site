const videos = [
    {
        title: "CoolNote Mix-17",
        videoId: "3bF8jSWqY0w",
        description: undefined,
    },
];

const performances = [
    {
        date: "Lundi 13 Avril 2026",
        venue: "Leclerc - Foire aux vins",
        city: "Soustons",
        description: "a partir de 20h00, sur réservation",
    },{
        date: "Vendredi 5 juin 2026",
        venue: "La Médiathèque",
        city: "Soustons",
        description: "a partir de 18h30 / 19h00 ... , Accompagnement musical autour de la dédicace du livre de Marc Varence 'Enfoiré!'",
    },
    {
        date: "Vendredi 19 juin 2026",
        venue: "La Guingueta",
        city: "Soustons",
        description: "A partir de 19h30, au bord de l'eau et sous les arbres ...",
    },
    {
        date: "Vendredi 24 Juillet 2026",
        venue: "Le Pékoé",
        city: "Soustons",
        description: "A partir de 19h30 en terrasse couverte.",
    },
    {
        date: "Samedi 8 Aout 2026",
        venue: "Le Paréo",
        city: "Azur",
        description: "A partir de 20h00, au bord du lac",
    },
    {
        date: "Samedi 22 Aout 2026",
        venue: "Le Paréo",
        city: "Azur",
        description: "A partir de 20h00, au bord du lac",
    },
   {
        date: "",
        venue: "",
        city: "",
        description: "",
    },
];

const videoGrid = document.querySelector("#video-grid");
const performanceGrid = document.querySelector("#performance-grid");

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
                    ${video.description ? `<p class="video-card__meta">${video.description}</p>` : ""}
                    <a class="video-card__link" href="${watchUrl}" target="_blank" rel="noreferrer">Voir sur YouTube</a>
                </div>
            </article>
        `;
    })
    .join("");

performanceGrid.innerHTML = performances
    .map(
        (performance, index) => `
            <article class="performance-card" style="animation-delay: ${index * 120}ms">
                <p class="performance-card__date">${performance.date}</p>
                <h3 class="performance-card__venue">${performance.venue}</h3>
                <p class="performance-card__city">${performance.city}</p>
                ${performance.description ? `<p class="performance-card__meta">${performance.description}</p>` : ""}
            </article>
        `,
    )
    .join("");
