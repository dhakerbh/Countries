import "./DarkMode.css";

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    document.getElementById("mode_label").innerHTML = "☼ Light Mode";
    localStorage.setItem("theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    document.getElementById("mode_label").innerHTML = "☾ Dark Mode";
    localStorage.setItem("theme", "light");
  };
  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  const currentTheme = localStorage.getItem("theme");
  async function onlloade() {
    if (currentTheme === "dark") {
      await new Promise((r) => setTimeout(r, 1));

      setDarkMode();
    }
  }
  return (
    <div className="dark_mode">
      <label id="mode_label" htmlFor="mode_switch">
        ☾ Dark Mode
      </label>
      <input
        type="checkbox"
        id="mode_switch"
        onChange={toggleTheme}
        defaultChecked={currentTheme === "dark"}
        onLoad={onlloade()}
      />
    </div>
  );
};

export default DarkMode;
