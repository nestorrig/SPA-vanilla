const Header = () => {
    const view = `
    <div class="header-main">
        <div class="header-logo">
            <h1 class="header-title">
                <a href="/">
                    Rick and Morty API
                </a>
            </h1>
        </div>
        <nav class="navbar">
            <a href="#/about/" class="navbar-item">
                About
            </a>
            <a href="#/contact/" class="navbar-item">
                Contact
            </a>
        </nav>
    </div>
    `;
    return view;
};

export default Header;