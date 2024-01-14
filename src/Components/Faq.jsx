import React, { useState } from "react";
import { questions } from "./FaqQuestion";
import FaqApi from "./FaqApi";

const Faq = () => {
  const [data] = useState(questions);
  return (
    <>
      <section className="main-div">
        <h4>Frequently Asked Question</h4>
        {data.map((curElem) => {
          const { id } = curElem;
          return <FaqApi key={id} {...curElem} />;
        })}
      </section>
    </>
  );
};

export default Faq;
