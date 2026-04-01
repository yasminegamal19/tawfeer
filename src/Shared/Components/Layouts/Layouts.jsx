import { memo } from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Services from "../Services/Services";

const Layouts = () => {
    return (
       <div className="layouts">
        <Hero />
        <About />
        <Services />
       </div>
    );
};

export default memo(Layouts);