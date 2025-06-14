import SearchBar from "./SearchBar"
import ThemeToggle from "./ThemeToggle"

export default function Header({ onSearch, onToggle, theme }) {
  return (

    <header 
      className="
        pt-8 md:pt-12 lg:pt-16">

      <div
        className="
          flex flex-col md:flex-row justify-around items-center
          mb-2 md:mb-3 lg:mb-4
        "
      >

        <span></span>
        <h1
          className={`
            uppercase text-2xl md:text-3xl lg:text-4xl
            font-medium tracking-wide
            ${theme === 'dark' ? 'text-stone-100' : 'text-stone-800'}
          `}
        >
          Searcha Gif
        </h1>
        <ThemeToggle onToggle={onToggle} theme={theme} />

      </div>

      <p
        className={`
          text-center text-xs md:text-sm lg:text-sm
          sm:px-8 md:px-16 lg:px-32
          mb-8 md:mb-12 lg:mb-16
          mt-2 md:mt-4 lg:mt-8 
          ${theme === 'dark' ? 'text-stone-200' : 'text-stone-700'}
        `}
      >
        Search, preview, and download GIFs with light/dark theme support.
      </p>

      <SearchBar onSearch={onSearch} theme={theme} />
    
    </header>
  )
}
