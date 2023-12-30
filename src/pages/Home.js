import getData from '../utils/getData';

const Home = async () => {
    const characters = await getData();
    const view = `
        <div class="Characters">
        ${characters.results.map(character => `
            <article class="character">
                <a href="#/${character.id}/" class="character-link">
                    <figure class="character-figure">
                        <img src="${character.image}" alt="${character.name}" class="character-img">
                    </figure>
                    <h2 class="character-name">${character.name}</h2>
                </a>
            </article>
        `).join('')}
        </div>
    `;
    return view;
};

export default Home;