// import { TbBrandMeta } from "react-icons/tb";
// import { IoLogoInstagram } from "react-icons/io5";
// import {RiTwitterXLine} from "react-icons/ri";
// import { useEffect, useState } from "react";




// const Topbar = () => {

//   const [sticky, setSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 0);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   })

//   return (
//     <div className={ `bg-rabbit-red text-white transition-all duration-300 z-50 ${sticky ? 'bg-black fixed top-0 left-0 right-0 shadow-md py-1 border ' : 'bg-rabbit-red  ' }`}>
//       <div className='container mx-auto flex justify-between items-center py-3 px-4'>
//         <div className="hidden md:flex items-center space-x-4">
//           <a href="#" className='hover:text-gray-300'>
//             <TbBrandMeta className="h-5 w-5" />
//           </a>
//           <a href="#" className='hover:text-gray-300'>
//             <IoLogoInstagram className="h-5 w-5" />
//           </a>
//           <a href="#" className='hover:text-gray-300'>
//             <RiTwitterXLine className="h-4 w-4" />
//           </a>
//         </div>
//        <div className="text-sm text-center flex-grow">
//        <span>We ship worldwide - Fast and reliable shipping!</span>
//        </div>
//        <div className="text-sm hidden md:block">
//       {/* <a href="tel:+91347568" className="hover:text-gray-300">
//          <select name="" id="" className="text-white"> +91
//           <option value="" className="text-white bg-red-600">+91</option>
//          </select>
//         12345 09876
//       </a> */}
//       <div className="flex items-center gap-2">
//   <select name="countryCode" id="countryCode" className="text-white bg-red-600 p-1 rounded text-2xl">
//   <option value="+91">🇮🇳 +91</option>
//   <option value="+61">🇦🇺 +61</option>
//   <option value="+44">🇬🇧 +44</option>
//   <option value="+7">🇷🇺 +7</option>
// </select>


//   <a href="tel:+911234509876" className="hover:text-gray-300 text-white">
//     12345-09876
//   </a>
// </div>
//        </div>
//       </div>
//     </div>
//   )
// }

// export default Topbar;




import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const Topbar = () => {
  const [sticky, setSticky] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("12345-09876");

  // Different phone numbers for each country
  const countryPhones = {
    "+91": "12345-09876",
    "+61": "45678-12345",
    "+44": "78901-23456",
    "+7": "65432-10987",
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // ✅ Added dependency array to prevent multiple event listeners

  // Update the phone number whenever country changes
  useEffect(() => {
    setPhoneNumber(countryPhones[countryCode]);
  }, [countryCode]);

  return (
    <div
      className={`text-white transition-all duration-300 z-50 ${
        sticky
          ? "bg-black fixed top-0 left-0 right-0 shadow-md py-1 border"
          : "bg-rabbit-red"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Left: Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-4 w-4" />
          </a>
        </div>

        {/* Center: Message */}
        <div className="text-sm text-center flex-grow">
          <span>We ship worldwide — Fast and reliable shipping!</span>
        </div>

        {/* Right: Country selector + Phone */}
        <div className="text-sm hidden md:block">
          <div className="flex items-center gap-2">
            <select
              name="countryCode"
              id="countryCode"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="text-white bg-transparent p-1 rounded text-2xl"
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+61">🇦🇺 +61</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+7">🇷🇺 +7</option>
            </select>

            <a
              href={`tel:${countryCode}${phoneNumber.replace(/[-\s]/g, "")}`}
              className="hover:text-gray-300 text-white"
            >
              {phoneNumber}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

