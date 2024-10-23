// Welcome.tsx - Welcome page component
// 10/22/2024 - Joshua Lim

import Self from "../assets/images/joshuaBusiness.jpg";
import { TypeAnimation } from 'react-type-animation';
import { Tooltip } from "@nextui-org/tooltip";

// Welcome page component
const Welcome = () => {
  return (
    <section className='h-screen w-screen flex'>
      <div className="m-auto">
        <Tooltip showArrow={true} content="Hey! That's me! If you are looking for more, simply swipe up!" placement="top">
          <img src={Self} alt="Joshua Lim" className="rounded-full h-40 w-40 md:h-60 md:w-60 m-auto" />
        </Tooltip>
        <h1 className="font-TitilliumWebBold mt-4 text-2xl">Joshua Lim</h1>
        <TypeAnimation
          sequence={[
            "Entreprenuer",
            2500,
            "Software Engineer",
            2500,
            "College Student",
            2500,
          ]}
          wrapper="h2"
          speed={30}
          repeat={Infinity}
        />
      </div>
    </section>
  );
};

export default Welcome;