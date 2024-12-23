import useTheme from "@/hooks/useTheme";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToggleTheme = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="flex items-center space-x-4">
      <div
        className={`relative w-16 h-8 rounded-full cursor-pointer transition-colors duration-300 ${
          theme === 'dark' ? 'bg-black' : 'bg-white'
        }`}
        onClick={toggleTheme}
      >
        <FontAwesomeIcon
          icon={faMoon}
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 text-lg transition-opacity ${
            theme === 'dark' ? 'opacity-0' : 'opacity-100 text-blue-800'
          }`}
        />
        <FontAwesomeIcon
          icon={faSun}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-lg transition-opacity ${
            theme === 'dark' ? 'opacity-100 text-white' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full shadow-md transition-transform duration-300 transform ${
            theme === 'dark'
              ? 'translate-x-2 bg-white'
              : 'translate-x-9 bg-blue-800'
          }`}
        ></div>
      </div>
    </div>
  );
}

export default ToggleTheme;