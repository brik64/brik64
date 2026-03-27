export function AnnouncementBanner() {
  return (
    <div className="flex w-full items-center justify-center bg-[#1A1817] px-4 py-2.5">
      <p className="text-center text-[13px] leading-tight text-white">
        BRIK-64 Beta 5.1 — 128 monomers, 15,424 tests, compiles to 14 targets{" "}
        <a href="/login" className="underline">
          Get started →
        </a>
      </p>
    </div>
  );
}
