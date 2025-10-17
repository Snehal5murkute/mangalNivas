export default function LanguageSwitcher({ lang, setLang }) {
  return (
    <div className="absolute top-5 left-5 space-x-2 z-10">
      <button
        onClick={() => setLang("english")}
        className={`px-3 py-1 rounded-1xl text-white  ${lang === "english" ? "bg-[#8b4513] " : "bg-[#8b4513]"}`}
      >
        English
      </button>

      <button
        onClick={() => setLang("marathi")}
        className={`px-3 py-1 rounded-1xl text-white ${lang === "marathi" ? "bg-[#8b4513] " : "bg-[#8b4513]"}`}
      >
        मराठी
      </button>
    </div>
  );
}
