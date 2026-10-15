export function ConnectionSketch({ variant = 'network' }) {
  return <div className={`vis-sketch vis-sketch-${variant}`} aria-hidden="true">
    <svg viewBox="0 0 360 180" fill="none">
      <path d="M20 150H340M20 110H340M20 70H340M60 20V160M120 20V160M180 20V160M240 20V160M300 20V160" className="vis-sketch-grid"/>
      {variant === 'education' ? <>
        <path d="M48 90H310" className="vis-sketch-path"/>
        {[60,140,220,300].map((x,i)=><g key={x} className="vis-sketch-node" style={{'--sketch-delay':`${i*90}ms`}}><rect x={x-22} y="68" width="44" height="44" rx="12"/><path d={`m${x-7} 91 5 5 10-12`}/></g>)}
        <path d="M52 38h34m50 0h24m56 0h23m57 0h18" className="vis-sketch-detail"/>
      </> : variant === 'spatial' ? <>
        <path d="m180 27 94 47-94 48-94-48 94-47Z" className="vis-sketch-plane vis-plane-top"/>
        <path d="m180 56 94 47-94 48-94-48 94-47Z" className="vis-sketch-plane vis-plane-middle"/>
        <path d="m180 83 94 47-94 48-94-48 94-47Z" className="vis-sketch-plane vis-plane-bottom"/>
        <path d="M86 74v57M274 74v57M180 122v56" className="vis-sketch-path"/>
        <circle cx="180" cy="74" r="6" className="vis-sketch-point"/>
      </> : variant === 'vision' ? <>
        <rect x="88" y="28" width="184" height="125" rx="12" className="vis-sketch-frame"/>
        <path d="M110 66V48h20m120 18V48h-20m20 66v18h-20m-120-18v18h20" className="vis-sketch-detail"/>
        <circle cx="180" cy="90" r="32" className="vis-sketch-ring"/><circle cx="180" cy="90" r="16" className="vis-sketch-ring"/>
        <path d="M88 90h184" className="vis-sketch-scan"/><circle cx="180" cy="90" r="5" className="vis-sketch-point"/>
      </> : <>
        <path d="M72 43q108 0 108 47T288 137M72 137q108 0 108-47T288 43M30 90h300" className="vis-sketch-path"/>
        {[[72,43],[288,43],[72,137],[288,137]].map(([x,y],i)=><g key={i} className="vis-sketch-node"><rect x={x-15} y={y-15} width="30" height="30" rx="8"/><circle cx={x} cy={y} r="4"/></g>)}
        <rect x="151" y="61" width="58" height="58" rx="16" className="vis-sketch-core"/><path d="m166 91 9 9 20-22" className="vis-sketch-detail"/>
      </>}
    </svg>
  </div>;
}
