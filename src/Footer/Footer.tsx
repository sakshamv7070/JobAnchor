import { 
  IconAnchor, 
  IconBrandFacebook, 
  IconBrandInstagram, 
  IconBrandX 
} from "@tabler/icons-react";

import { footerLinks } from "../Data/Data";

const Footer = () => {
  return (
    <div className=" py-10 flex justify-around bg-mine-shaft-950 font-['poppins']">

      {/* Left Section */}
      <div className="flex flex-col w-1/4 gap-4">

        <div className="flex gap-2 items-center text-bright-sun-400">
          <IconAnchor className="h-6 w-6 stroke-[1.20]" />
          <div className="text-xl font-semibold">JobAnchor</div>
        </div>

        <div className="text-sm text-mine-shaft-300">
          Job portal with user profiles, skills updates, certifications,
          work experience, and admin job postings.
        </div>

        <div className="flex gap-4 text-bright-sun-400">
     <a
    href="https://www.facebook.com/your_username"
    target="_blank"
    rel="noopener noreferrer"
    className="transition duration-300 hover:text-white hover:scale-110">
    <IconBrandFacebook size={24} />
     </a>
     <a
    href="https://www.instagram.com/yo"
    target="_blank"
    rel="noopener noreferrer"
    className="transition duration-300 hover:text-white hover:scale-110">
    <IconBrandInstagram size={24} />
     </a>

    <a
    href="https://x.com/your_usern"
    target="_blank"
    rel="noopener noreferrer"
    className="transition duration-300 hover:text-white hover:scale-110">
    <IconBrandX size={24} />
   </a>
      </div>

      </div>

      {/* Right Links Section */}
      {footerLinks.map((item, index) => (
        <div key={index}>
          <div className="items-center text-lg font-semibold mb-4 text-bright-sun-400">{item.title}</div>

          {item.links.map((link, i) => (
            <div
              key={i}
              className="text-sm ease-in transition duration-300 hover:translate-x-2 text-mine-shaft-300 hover:text-bright-sun-400 mb-1 cursor-pointer  "
            >
              {link}
            </div>
          ))}
        </div>
      ))}

    </div>
  );
};

export default Footer;