import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import "./Who.css";
import first from "../../assets/first.jpg";
import second from "../../assets/second.png";
import third from "../../assets/third.png";
import fourth from "../../assets/fourth.jpg";
const cards = [
  {
    id: 1,
    title: "Squad Goals Unlocked",
    desc: "Gather your crew for an unforgettable night of edge-of-your-seat action. Forget the standard bar—step into our industrial arena, grab an axe, and see who truly rules the leaderboard.",
    img:  first,  
    alt: "Group of friends cheering while throwing axes in an industrial-themed venue with neon lights.",
  },
  {
    id: 2,
    title: "Corporate Team Building",
    desc: "Trade the boardroom for the throwing lane. Boost team morale, blow off steam, and build camaraderie with a high-energy axe-throwing experience designed to unleash your team's competitive edge.",
    img: second,  
    alt: "Coworkers high-fiving in a premium axe throwing lane during a corporate event.",
  },
  {
    id: 3,
    title: "Thrilling Kitty Parties",
    desc: "Redefine the classic get-together. Add a shot of adrenaline to your next kitty party with an exclusive, high-energy environment where you can socialize, celebrate, and hit the bullseye.",
    img: third,  
    alt: "Women celebrating a kitty party with drinks in a chic, edgy entertainment venue.",
  },
  {
  id: 4,
  title: "The Ultimate Bro-Down",
  desc: "Settle the score and claim your bragging rights. Swap the routine hangout for a high-stakes, adrenaline-pumping arena. It’s the perfect mix of raw competition and forged brotherhood in an atmosphere built for the bold.",
  img:fourth,  
  alt: "Two men laughing and competing in a dark, industrial axe-throwing lane under neon lights.",
  },
];

// Inside your component, update the heading:
export default function Who() {
  return (
    <section className="ss-section" id="who">
      <div className="ss-heading-wrap">
        <h2 className="ss-heading">
          Unleash your
          <br />
          inner thrill
        </h2>
      </div>
      
      <ScrollStack
        className="who-scroll-stack"
        useWindowScroll
        itemDistance={120}
        itemScale={0.03}
        itemStackDistance={32}
        stackPosition="22%"
        scaleEndPosition="10%"
        baseScale={0.86}
      >
        {cards.map((card) => (
          <ScrollStackItem key={card.id} itemClassName="who-stack-card">
            <article className="who-card">
              <div className="who-card-line" />
              <div className="who-card-layout">
                <div className="who-card-title-wrap">
                  <h3 className="who-card-title">{card.title}</h3>
                </div>
                <div className="who-card-image-wrap">
                  <div className="who-card-image-frame">
                    <img
                      decoding="auto"
                      loading="lazy"
                      src={card.img}
                      alt={card.alt}
                      className="who-card-image"
                    />
                  </div>
                </div>
                <div className="who-card-copy">
                  <p className="who-card-description">{card.desc}</p>
                </div>
              </div>
            </article>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
}
