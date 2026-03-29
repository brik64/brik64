export function AnnouncementBanner() {
  return (
    <div className="flex w-full items-center justify-center bg-[#1A1817] px-4 py-2.5">
      <p className="text-center text-[13px] leading-tight text-white">
        BRIK-64 Beta 5.1 — full monomer catalog, 15,424 tests, multi-target compilation{" "}
        <a href="/login" className="underline">
          Get started →
        </a>
      </p>
    </div>
  );
}
