import FlowingMenu from "./FlowingMenu";
import "./Games.css";

const experienceItems = [
  {
    link: "#",
    text: "Escape Room",
    image: "https://images.unsplash.com/photo-1463871181391-8550cd89c179?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXNjYXBlJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    link: "#",
    text: "VR Games",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dnIlMjBoZWFkc2V0fGVufDB8fDB8fHww",
  },
  {
    link: "#",
    text: "Archery",
    image: "https://plus.unsplash.com/premium_photo-1664304726300-3aaee5c13cfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJjaGVyeSUyMGluZG9vcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    link: "#",
    text: "Axe Throwing",
    image: "https://images.pexels.com/photos/14072170/pexels-photo-14072170.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    link: "#",
    text: "RC Truck",
    image: "https://images.pexels.com/photos/29082147/pexels-photo-29082147.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function Games() {
  return (
    <section id="games" className="games-section">
      <div className="games-heading">
        <p className="games-eyebrow">Experiences</p>
        <h2 className="games-title">Choose Your Next Rush</h2>
      </div>

      <div className="games-flow-wrap">
        <FlowingMenu
          items={experienceItems}
          speed={15}
          textColor="#efede8"
          bgColor="#111111"
          marqueeBgColor="#efede8"
          marqueeTextColor="#111111"
          borderColor="rgba(239, 237, 232, 0.5)"
        />
      </div>
    </section>
  );
}
