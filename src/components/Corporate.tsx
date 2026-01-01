import grouppic from '../assets/gallery/grouppic.webp';
import newInterior from '../assets/gallery/newInterior.webp';
import dining from '../assets/gallery/dining.webp';
import lxryhomesitting from '../assets/gallery/lxryhomesitting.webp';
import lxryhomeblkny from '../assets/gallery/lxryhomeblkny.webp';
import pool from '../assets/gallery/SwimmingPool.webp';

export default function Corporate() {
  return (
    <section className="bg-white mt-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-wide text-primary mb-4">
            HOSTING PERFECTED
          </h2>

          <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
            From focused boardroom discussions to large-scale corporate events, Mango Village Resorts delivers professional environments that inspire clarity, collaboration, and success.
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
              {/* <ActivityVideo startAt={92} stopAt={95} thumbnailUrl={grouppic} /> */}
              <img src={grouppic} alt="" className='h-full' />

              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}


            </div>
          </div>

          {/* CARD 2 */}
          <div className="overflow-hidden rounded-lg md:rounded-xl">
            <div className="relative w-full h-full overflow-hidden">
              {/* <ActivityVideo startAt={96} stopAt={100} thumbnailUrl={lxryhomesitting} /> */}
              <img src={dining} alt="" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}

            </div>
          </div>

          {/* CARD 3 */}
          <div className="overflow-hidden rounded-lg md:rounded-xl">
            <div className="relative w-full h-full overflow-hidden">
              {/* <ActivityVideo startAt={100} stopAt={103} thumbnailUrl={dining} /> */}
              <img src={pool} alt="" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}

            </div>
          </div>

          {/* CARD 5 */}
          <div className="overflow-hidden rounded-lg md:rounded-xl row-span-2 col-span-2 md:col-span-1 md:row-span-1">
            <div className="relative w-full h-full overflow-hidden">
              {/* <ActivityVideo startAt={105} stopAt={116} thumbnailUrl={newInterior} /> */}
              <img src={newInterior} alt="" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}

            </div>
          </div>

          {/* CARD 4 */}
          <div className="overflow-hidden rounded-lg md:rounded-xl">
            <div className="relative w-full h-full overflow-hidden">
              {/* <ActivityVideo startAt={46} stopAt={48} thumbnailUrl={lxryhomeblkny} /> */}
              <img src={lxryhomeblkny} alt="" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}

            </div>
          </div>

          {/* CARD 6 */}
          <div className="overflow-hidden rounded-lg md:rounded-xl">
            <div className="relative w-full h-full overflow-hidden">
              {/* <ActivityVideo startAt={117} stopAt={118} thumbnailUrl={dining} /> */}
              <img src={lxryhomesitting} alt="" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
