import Results from './results';
import Search from './search';

export default function Main() {
  return (
    <section className="mt-10 flex gap-8  text-white flex-col md:flex-row justify-between items-center px-4 md:px-10">
      <section className="w-full md:w-[561px] flex flex-col gap-8">
        <div>
          <h1 className="font-semibold text-xl md:text-5xl">
            Discover a new Place for your next activity
          </h1>
          <p className="mt-6 text-base md:text-lg text-[#B6B6B6]">
            Not sure where to go next? Simply tell us what you're in the mood
            for, and we'll surprise you with the perfect spot nearby
          </p>
        </div>
        <Search />
      </section>
      <Results />
    </section>
  );
}
