import React from "react";

export default function SectionHeader({ eyebrow, title, copy }) {
  return (
    <div className="mb-10">
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}
