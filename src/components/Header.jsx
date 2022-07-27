function Header() {
  return <nav className="blue lighten-1">
    <div className="nav-wrapper">
      <a href="/react-shop" className="brand-logo">React Shop</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="https://github.com/just36?tab=repositories">Repo</a></li>
      </ul>
    </div>
  </nav>
}

export {Header}