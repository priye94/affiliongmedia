interface WaveDividerProps {
  flip?: boolean;
}

export default function WaveDivider({
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none ${
        flip ? "rotate-180" : ""
      }`}
    >
      <svg
        viewBox="0 0 1440 170"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full h-auto"
      >
        <path
          fill="#0F172A"
          d="M0,64
             C180,140
             360,20
             540,70
             C720,120
             900,180
             1080,110
             C1260,40
             1350,70
             1440,100
             L1440,170
             L0,170
             Z"
        />
      </svg>
    </div>
  );
}