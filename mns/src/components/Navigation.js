const Navigation = () => {
  return (
    <nav>
      <div className="nav__brand">
        <h1 className="px-4">MNS</h1>

        <ul className="nav__links">
          <li>
            <a href="/">Domain Names</a>
          </li>
          <li>
            <a href="/">Websites & Hosting</a>
          </li>
          <li>
            <a href="/">Commerce</a>
          </li>
          <li>
            <a href="/">Email & Marketing</a>
          </li>
        </ul>
      </div>

      <button type="button" className="nav__connect">
        Connect
      </button>
    </nav>
  );
};

export default Navigation;
