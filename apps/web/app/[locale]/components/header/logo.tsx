export default function Logo() {
  return (
    <div className="flex items-center gap-2 lg:justify-center">
      <svg
        className="h-[18px] w-[18px] -translate-y-[0.5px] fill-current"
        fill="none"
        height="22"
        viewBox="0 0 235 203"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Vercel</title>
        <path d="M117.082 0L234.164 202.794H0L117.082 0Z" fill="currentColor" />
      </svg>
      <p className="whitespace-nowrap font-semibold">next-open-forge</p>
    </div>
  );
}
