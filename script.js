const videos = [
    {
        title: "CoolNote Mix-17",
        videoId: "3bF8jSWqY0w",
        description: undefined,
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
                    ${video.description ? `<p class="video-card__meta">${video.description}</p>` : ""}
                    <a class="video-card__link" href="${watchUrl}" target="_blank" rel="noreferrer">Voir sur YouTube</a>
                </div>
            </article>
        `;
    })
    .join("");