import "./Narrative.css";
import { GiCrossedAxes } from "react-icons/gi";

export default function Narrative() {
  return (
    <section id="narrative" aria-labelledby="narrative-heading">
      <div className="narrative-inner">
        <h2 className="section-label narrative-kicker">
          <GiCrossedAxes />
        </h2>

        <h2 className="narrative-title" id="narrative-heading">
          HOUSE OF THRILL.
          <br />
          Luxury Adrenaline. Forged for the Bold.
        </h2>

        <p className="narrative-lead">
          Step beyond the sanitized, ordinary night out and into our meticulously curated
          arena of forged steel, dark atmosphere, and beautifully controlled chaos. We
          facilitate uncompromising, high-octane collective experiences from Axe Throwing
          and tactical VR to intricate Escape Rooms, Archery, and dynamic RC battles.
          House of Thrill fuses premium, intentional design with raw, unfiltered
          excitement for those who live on the edge and chase unforgettable moments. Are
          you bold enough to enter?
        </p>
      </div>
    </section>
  );
}
