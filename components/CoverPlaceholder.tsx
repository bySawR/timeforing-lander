// Illustrert placeholder for innlegg uten eget toppbilde.
// Bruker maskoten fra favicon-en på en kategori-tonet bakgrunn,
// så bloggen ser gjennomarbeidet ut selv uten opplastede bilder.

const CATEGORY_TONES: Record<string, { bg: string; blob: string; face: string }> = {
  tips: { bg: '#f4e4ff', blob: '#e4c8f5', face: '#50106C' },
  mva: { bg: '#e2cfef', blob: '#cfa4e8', face: '#43005e' },
  frilans: { bg: '#faf1ff', blob: '#e4c8f5', face: '#601382' },
  fakturering: { bg: '#ecd9f9', blob: '#d9b6f0', face: '#50106C' },
  produkt: { bg: '#e9d5f6', blob: '#cfa4e8', face: '#2a003d' },
};

export default function CoverPlaceholder({
  category,
  title,
}: {
  category: string;
  title?: string;
}) {
  const tone = CATEGORY_TONES[category] || CATEGORY_TONES.tips;

  return (
    <svg
      className="cover-placeholder"
      viewBox="0 0 640 360"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title ? `Illustrasjon for ${title}` : 'Illustrasjon'}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="640" height="360" fill={tone.bg} />
      <circle cx="80" cy="330" r="130" fill={tone.blob} opacity="0.55" />
      <circle cx="590" cy="30" r="110" fill={tone.blob} opacity="0.45" />
      {/* Maskoten fra logoen: smil + øyenbryn */}
      <g transform="translate(212, 72) scale(0.2)">
        <path
          d="M708.791 616.66C704.028 612.616 694.861 610.1 686.593 612.886C579.468 648.025 464.345 631.219 375.914 562.649C361.085 556.897 338.978 560.582 336.102 577.387C313.724 708.687 392.809 848.973 521.862 844.659C681.201 839.357 733.595 637.78 708.88 616.66H708.791Z"
          fill={tone.face}
        />
        <path
          d="M378.322 421.284C379.85 438.269 390.005 447.616 403.935 449.413C455.52 456.153 440.332 346.692 371.582 296.725C327.096 264.372 269.22 269.495 226.802 303.196C179.351 340.941 145.829 410.949 189.416 420.925C202.447 423.89 214.759 417.24 221.14 401.693C239.743 356.938 274.882 322.967 317.48 331.235C356.663 338.784 374.278 376.26 378.232 421.284H378.322Z"
          fill={tone.face}
        />
        <path
          d="M738.176 363.497C684.164 401.243 645.071 477.991 685.692 489.944C719.033 499.739 721.1 452.198 757.677 415.981C784.279 389.649 825.169 388.661 850.962 420.025C890.594 468.195 866.06 521.847 903.985 523.914C945.864 526.161 936.428 454.355 902.367 398.636C867.318 341.389 793.715 324.674 738.176 363.497Z"
          fill={tone.face}
        />
      </g>
    </svg>
  );
}
