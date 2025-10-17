import { content } from "../data/content";

export default function MapSection({ lang }) {
  // Get text for selected language; default to English
  const data = content[lang] || content.english;

  return (
    <div className="mt-10 text-center animate-fadeInUp">
      <h2 className="text-2xl font-bold text-[#8b4513] mb-4">
        {data.direction} {/* Will show "Get Direction" or "मार्ग" */}
      </h2>

      <iframe
        className="mx-auto w-11/12 h-64 rounded-xl shadow-md"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3838.6563073969037!2d74.50982817513068!3d15.822066384822149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDQ5JzE5LjQiTiA3NMKwMzAnNDQuNyJF!5e0!3m2!1sen!2sin!4v1760691714074!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        title="Map"
      ></iframe>
    </div>
  );
}
