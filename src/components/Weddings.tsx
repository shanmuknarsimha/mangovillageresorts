import birthdday from '../assets/gallery/birthdday.webp';
import stage from '../assets/gallery/stage.webp';
import ritual from '../assets/gallery/ritual.webp';
import raindancewed from '../assets/gallery/raindancewed.webp';
import crakers from '../assets/gallery/crakers.webp';
import dining from '../assets/gallery/diningl.webp';

export default function TraditionalEvents() {
  return (
    <section id="events" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-wide text-primary mb-4">
            ICONIC TRADITIONAL EVENTS
          </h2>

          <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
            From weddings and birthday celebrations to elegant traditional gatherings,
            choose a beautiful setting where every moment is thoughtfully celebrated.
          </p>

          <button className="inline-flex items-center gap-2 bg-gold text-white px-6 py-2 rounded-full font-medium hover:bg-gold-dark transition">
            Explore More
          </button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gris-rows-6 md:grid-cols-3 md:grid-rows-3 gap-2 md:gap-4 max-w-7xl mx-auto w-full">

          {/* BIG CARD */}
          <div className="overflow-hidden rounded-lg md:rounded-xl col-span-2 row-span-2">
            <div className="relative w-full h-full overflow-hidden">
              {/* <ActivityVideo startAt={92} stopAt={95} thumbnailUrl={birthdday} /> */}
              <img src={birthdday} alt="" className='h-full' />

              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}


            </div>
          </div>

          {/* CARD 2 */}
          <div className="overflow-hidden rounded-lg md:rounded-xl">
            <div className="relative w-full h-full overflow-hidden">
              {/* <ActivityVideo startAt={96} stopAt={100} thumbnailUrl={raindancewed} /> */}
              <img src={ritual} alt="" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}

            </div>
          </div>

          {/* CARD 3 */}
          <div className="overflow-hidden rounded-lg md:rounded-xl">
            <div className="relative w-full h-full overflow-hidden">
              {/* <ActivityVideo startAt={100} stopAt={103} thumbnailUrl={ritual} /> */}
              <img src={raindancewed} alt="" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}

            </div>
          </div>

          {/* CARD 5 */}
          <div className="overflow-hidden rounded-lg md:rounded-xl row-span-2 col-span-2 md:col-span-1 md:row-span-1">
            <div className="relative w-full h-full overflow-hidden">
              {/* <ActivityVideo startAt={105} stopAt={116} thumbnailUrl={stage} /> */}
              <img src={stage} alt="" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}

            </div>
          </div>

          {/* CARD 4 */}
          <div className="overflow-hidden rounded-lg md:rounded-xl">
            <div className="relative w-full h-full overflow-hidden">
              {/* <ActivityVideo startAt={46} stopAt={48} thumbnailUrl={crakers} /> */}
              <img src={crakers} alt="" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}

            </div>
          </div>

          {/* CARD 6 */}
          <div className="overflow-hidden rounded-lg md:rounded-xl">
            <div className="relative w-full h-full overflow-hidden">
              {/* <ActivityVideo startAt={117} stopAt={118} thumbnailUrl={dining} /> */}
              <img src={dining} alt="" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
