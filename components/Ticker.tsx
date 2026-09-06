import { tickerText } from "@/content/site";

export function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div id="tickertrack">
        <span>{tickerText}</span>
        <span>{tickerText}</span>
      </div>
    </div>
  );
}
