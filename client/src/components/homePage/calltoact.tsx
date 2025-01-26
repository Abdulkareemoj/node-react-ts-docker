export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28 px-4 bg-slate-950 md:px-8">
      <div className="w-full h-full rounded-full bg-linear-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
      <div className="max-w-xl mx-auto text-center relative">
        <div className="py-4">
          <h3 className="text-3xl text-slate-200 font-semibold md:text-4xl">
            Get Unlimited Access To All Templates
          </h3>
          <p className="text-slate-300 leading-relaxed mt-3">
            Nam erat risus, sodales sit amet lobortis ut, finibus eget metus.
            Cras aliquam ante ut tortor posuere feugiat. Duis sodales nisi id
            porta lacinia.
          </p>
        </div>
        <div className="mt-5 items-center justify-center gap-3 sm:flex">
          <a
            href="#"
            className="block w-full mt-2 py-2.5 px-8 text-slate-700 bg-white rounded-md duration-150 hover:bg-slate-100 sm:w-auto"
          >
            Try It Out
          </a>
          <a
            href="#"
            className="block w-full mt-2 py-2.5 px-8 text-white bg-zinc-700 rounded-md duration-150 hover:bg-slate-800 sm:w-auto"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
