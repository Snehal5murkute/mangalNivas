import ganpati from "../assets/ganesha1.webp";
import house from "../assets/house2.jpeg";
import { content } from "../data/content";


export default function InvitationCard({ lang }) {
  const data = content[lang] || content.english;

  return (
    <div className="text-center px-4 sm:px-8 mt-10 ">
      {/* === Top Section === */}
      <div className="flex flex-col items-center justify-center text-center pt-20">
     {/* Logo */}
      <img
        src={ganpati}
        alt="Ganpati"
        className="w-20 h-20 mb-2 "
        loading="lazy"
      />

      {/* Two names below logo */}
      {data.topNames.slice(0, 2).map((name, idx) => (
        <p key={idx} className=" font-medium text-blue-600 leading-tight">
          {name}
        </p>
      ))}
       </div>


      {/* === Center Text Section === */}
      <div className="mt-6 px-2 ">
        <h3 className="text-1xl  font-semibold font- text-[#eb3467] mb-2">
          {data.centerText.wishing}
        </h3>

        {data.centerText.elders.map((e, idx) => (
          <h2
            key={idx}
            className="text-[15px] sm:text-2xl font-bold  text-[#8b4513]  "
          >
            {e}
          </h2>
        ))}

        <p className="mt-4 text-[13px] sm:text-base text-gray-800 leading-4  mx-auto font-medium" >
          {data.centerText.inviteText}
        </p>

        <div className="leading-4">
          <h2 className="text-[18px] sm:text-2xl font-bold mt-3 text-[#8b4513]">
          {data.centerText.ceremony}
        </h2>
        <h4 className="text-[14px] sm:text-lg mt-1 text-gray-800 font-medium">
          {data.centerText.homeText}
        </h4>
        </div>
        

        
      </div>

      {/* === Card Section === */}
    <div className="max-w-lg w-full mx-auto bg-white rounded-3xl shadow-xl px-6 py-2 pt-2 sm:px-12 sm-py-2 border-2 border-orange-200 mt-6">
      <h2
        className="text-4xl font-extrabold mb-4  text-center pt-4  bg-gradient-to-r from-red-600 via-red-800 to-black 
                  bg-clip-text text-transparent " >
        {data.card.heading}
      </h2>

  {/* Full-width image (no side padding) */}
      <div className="-mx-2 sm:-mx-6 mb-4">
        <img
          src={house}
          alt="House"
          className="rounded-none w-full h-[500px] object-cover "
          loading="lazy"
        />
      </div>

      <h3 className="text-lg font-bold text-[#8b4513] mb-2 text-center">
        {data.card.date}
      </h3>
      <p className="text-sm text-gray-800 mb-1 text-center">{data.card.address}</p>
      <p className="text-sm text-gray-800 mb-4 text-center">
      <a href={`tel:${data.card.phone}`} className="hover:underline">
        {data.card.phone}
      </a>
    </p>

      <p className="text-[#8b4513] font-semibold text-center">{data.card.lunchLabel}</p>
      <p className="text-gray-800 mb-4 text-center">{data.card.lunchTime}</p>

      <p className="text-[#8b4513] font-semibold mb-2 text-center">
        {data.card.compliments}
      </p>

      {data.card.hosts.map((group, idx) => (
        <div
          key={idx}
          className="flex  justify-center items-center gap-5  text-gray-800 font-bold"
        >
          {group.map((host, i) => (
            <p key={i}>{host}</p>
          ))}
        </div>
      ))}

      <p className="text-[#eb3467]  mt-2 text-center">{data.card.invitees}</p>
      <p className="text-gray-700 font-semibold text-center">{data.card.family}</p>
    </div>

    </div>
  );
}

