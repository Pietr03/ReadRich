import search from "../../assets/search.svg"; // Assicurati che il percorso sia corretto

const NavBar = () => {
  return (
    <div id="navbar" className="relative inline-flex py-2">
      <div id="search-bar" className="rounded-2xl max-w-fit p-1.5 mx-auto">
        <img
          src={search}
          alt="search-icon"
          className="absolute top-1/2 -translate-y-1/2 h-6 w-6"
        />
        <input
          className="w-3/4 mx-4 bg-transparent"
          type="text"
          placeholder="Cerca "
        />
      </div>
    </div>
  );
};

export default NavBar;
