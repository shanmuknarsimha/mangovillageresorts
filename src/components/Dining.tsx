import cooking from '../assets/gallery/cooking.webp';
import biryani from '../assets/gallery/biryani.webp';
import table from '../assets/gallery/table.webp';
import starters from '../assets/gallery/starters.webp';
import chef from '../assets/gallery/chef.webp';
import dining from '../assets/gallery/dining.webp';

export default function TraditionalEvents() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-wide text-primary mb-4">
            A CULINARY JOURNEY
          </h2>

          <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
            From leisurely brunches to elegant outdoor dinners, our dining experiences bring together inspired menus, inviting settings, and unforgettable moments.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gris-rows-6 md:grid-cols-3 md:grid-rows-3 gap-2 md:gap-4 max-w-7xl mx-auto w-full">

          {/* BIG CARD */}
          <div className="overflow-hidden rounded-lg md:rounded-xl col-span-2 row-span-2">
            <div className="relative w-full h-full overflow-hidden">
              {/* <ActivityVideo startAt={92} stopAt={95} thumbnailUrl={cooking} /> */}
              <img src={dining} alt="" className='h-full' />

              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}


            </div>
          </div>

          {/* CARD 2 */}
          <div className="overflow-hidden rounded-lg md:rounded-xl">
            <div className="relative w-full h-full overflow-hidden">
              {/* <ActivityVideo startAt={96} stopAt={100} thumbnailUrl={starters} /> */}
              <img src={biryani} alt="" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}

            </div>
          </div>

          {/* CARD 3 */}
          <div className="overflow-hidden rounded-lg md:rounded-xl">
            <div className="relative w-full h-full overflow-hidden">
              {/* <ActivityVideo startAt={100} stopAt={103} thumbnailUrl={table} /> */}
              <img src={starters} alt="" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}

            </div>
          </div>

          {/* CARD 5 */}
          <div className="overflow-hidden rounded-lg md:rounded-xl row-span-2 col-span-2 md:col-span-1 md:row-span-1 md:col-start-2">
            <div className="relative w-full h-full overflow-hidden">
              {/* <ActivityVideo startAt={105} stopAt={116} thumbnailUrl={biryani} /> */}
              <img src={chef} alt="" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}

            </div>
          </div>

          {/* CARD 4 */}
          <div className="overflow-hidden rounded-lg md:rounded-xl md:col-start-1 row-start-6 md:row-start-3">
            <div className="relative w-full h-full overflow-hidden">
              {/* <ActivityVideo startAt={46} stopAt={48} thumbnailUrl={chef} /> */}
              <img src={cooking} alt="" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}

            </div>
          </div>

          {/* CARD 6 */}
          <div className="overflow-hidden rounded-lg md:rounded-xl">
            <div className="relative w-full h-full overflow-hidden">
              {/* <ActivityVideo startAt={117} stopAt={118} thumbnailUrl={dining} /> */}
              <img src={table} alt="" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
