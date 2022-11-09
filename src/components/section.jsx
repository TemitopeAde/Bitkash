import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import clx from "../utils/clx";

export default function Section({ animation='fade-up', background, url, classname, children }) {

  React.useEffect(() => {
    Aos.init()
    Aos.refresh()
  })

  const classes = clx(
    "lg:tw-w-[90%] tw-mx-auto tw-py-10 tw-px-3 lg:tw-px-0",
    classname
  );
  return (
    <section
      data-aos={animation}
      data-aos-delay={300}
      className={`tw-w-full ${background}`}
      style={{ backgroundImage: url }}
    >
      <div className={classes}>{children}</div>
    </section>
  );
}
