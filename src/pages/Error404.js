const Error404 = () => {
    const view = `
    <div class="Error404">
        <h2>Page not found</h2>
        <figure class="Error404-figure">
            <img src="https://i.pinimg.com/originals/c2/b4/cf/c2b4cfa2c85a298fe6a57d13f1b6ec74.png" alt="Rick and Morty">
        </figure>
        <p>
            Lo sentimos, la página que buscas no existe.
            <a href="/">Regresa a la página principal</a>
        </p>
    </div>
    `;
    return view;
};

export default Error404;