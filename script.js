const videos = [
    {
        title: "CoolNote Mix-17",
        videoId: "3bF8jSWqY0w",
        description: undefined,
    },
];

const performances = [
    {
        date: "14 juin 2026",
        venue: "Le Theatre",
        city: "Biarritz",
        description: "Set acoustique en duo.",
    },
    {
        date: "28 juin 2026",
        venue: "Terrasse des Docks",
        city: "Bayonne",
        description: "Concert au coucher du soleil.",
    },
    {
        date: "12 juillet 2026",
        venue: "Festival d'Ete",
        city: "Hossegor",
        description: "Performance piano-voix en plein air.",
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
