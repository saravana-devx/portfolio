import React from "react";

const SectionIntro = ({ eyebrow, heading, description, headingClassName = "max-w-sm" }) => (
  <div className="lg:pt-8">
    <p className="section-label">{eyebrow}</p>
    <h2 className={`section-heading ${headingClassName}`}>{heading}</h2>
    {description && (
      <p className="mt-5 max-w-md text-base leading-8 text-slate-300/78">{description}</p>
    )}
  </div>
);

export default SectionIntro;
