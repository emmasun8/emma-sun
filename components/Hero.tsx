export function HelloHero() {
  return (
    <div className="bbox inline-block">
      <span className="handle h-tl" aria-hidden />
      <span className="handle h-tm" aria-hidden />
      <span className="handle h-tr" aria-hidden />
      <span className="handle h-ml" aria-hidden />
      <span className="handle h-mr" aria-hidden />
      <span className="handle h-bl" aria-hidden />
      <span className="handle h-bm" aria-hidden />
      <span className="handle h-br" aria-hidden />
      <h1
        className="serif-hello text-[6.5rem] sm:text-[8rem] md:text-[10rem] leading-[0.9]"
        aria-label="Hi, I'm Emma"
      >
        Hi.
      </h1>
    </div>
  );
}
