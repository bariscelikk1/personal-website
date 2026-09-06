import { VisitorCounter } from "@/components/VisitorCounter";

export function Footer() {
  return (
    <footer>
      <div className="blinkies">
        <span className="blinkie">✧ best viewed @ 1024×768 ✧</span>
        <span className="blinkie">♥ made with HTML ♥</span>
        <span className="blinkie">✿ Istanbul, TR ✿</span>
      </div>
      <div>
        <span className="uc">🚧 under construction · always shipping 🚧</span>
      </div>
      <div style={{ marginTop: 16 }}>
        <div
          style={{
            fontFamily: "var(--tech)",
            fontSize: ".62rem",
            letterSpacing: ".24em",
            color: "#9fb4c7",
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          You are visitor number
        </div>
        <VisitorCounter />
      </div>
      <div className="foot-note">© 2026 N. Barış Çelik · thx 4 visiting !! ( ˶ˆᗜˆ˵ )</div>
    </footer>
  );
}
