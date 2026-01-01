import { Calendar, Users, MapPin, ChevronDown, Waves, CloudRain, Film, Dumbbell, Gamepad2 } from 'lucide-react';
// import ActivityVideo from './ActivityVideo';
import countrsideImage from '../assets/gallery/countryside.webp';
import pool from '../assets/gallery/pool.webp';
import billiards from '../assets/gallery/billiards.webp';
import projector from '../assets/gallery/projector.webp';
import raindance from '../assets/gallery/raindance.webp';
import turf from '../assets/gallery/Box-Cricket.webp';
import humanfossball from '../assets/gallery/humanfossball.webp';
export default function Activities() {


    const activities = [
        { title: "Swimming Pool", description: "Chill, splash, unwind", icon: Waves, start: 92, end: 95, thumbnailimg: pool },
        { title: "Rain Dance", description: "Fun moments under refreshing showers", icon: CloudRain, start: 96, end: 100, thumbnailimg: raindance },
        { title: "Outdoor Projector", description: "Movie nights beneath the stars", icon: Film, start: 100, end: 103, thumbnailimg: projector },
        { title: "Turf Court", description: "Open-Air Sports Zone", icon: Dumbbell, start: 46, end: 48, thumbnailimg: turf },
        { title: "Indoor Games", description: "Relaxed Indoor Play", icon: Gamepad2, start: 105, end: 116, thumbnailimg: billiards },
        { title: "Group fun", description: "Designed exclusively by us", icon: Users, start: 117, end: 118, thumbnailimg: humanfossball },
    ];
    return (
        <section className="relative min-h-screen text-white mb-32">

            <div className="text-center max-w-3xl mx-auto mb-4 px-6">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary mb-6 tracking-wide">
                    Where Experiences Go Beyond Stay
                </h2>
                <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed">
                    From outdoor indulgences to curated group activities, every moment at MVR creates lasting memories.
                </p>
            </div>

            <div className="grid grid-cols-2 gris-rows-6 md:grid-cols-3 md:grid-rows-3 gap-2 md:gap-4 max-w-6xl mx-auto w-full px-4 md:px-0">

                {/* BIG CARD */}
                <div className="overflow-hidden rounded-lg md:rounded-xl col-span-2 row-span-2">
                    <div className="relative w-full h-full overflow-hidden">
                        {/* <ActivityVideo startAt={92} stopAt={95} thumbnailUrl={pool} /> */}
                        <img src={pool} alt="" className='h-full'/>

                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}

                        <div className="absolute bottom-0 p-4 hidden md:block">
                            <h4 className="font-serif text-xl font-bold">Swimming Pool</h4>
                            <p className="text-sm text-white/90">Chill, splash, unwind</p>
                        </div>
                    </div>
                </div>

                {/* CARD 2 */}
                <div className="overflow-hidden rounded-lg md:rounded-xl">
                    <div className="relative w-full h-full overflow-hidden">
                        {/* <ActivityVideo startAt={96} stopAt={100} thumbnailUrl={raindance} /> */}
                        <img src={raindance} alt="" />
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}
                        <div className="absolute bottom-0 p-4 hidden md:block">
                            <h4 className="font-serif text-lg font-bold">Rain Dance</h4>
                            <p className="text-sm text-white/90">Refreshing fun showers</p>
                        </div>
                    </div>
                </div>

                {/* CARD 3 */}
                <div className="overflow-hidden rounded-lg md:rounded-xl">
                    <div className="relative w-full h-full overflow-hidden">
                        {/* <ActivityVideo startAt={100} stopAt={103} thumbnailUrl={projector} /> */}
                        <img src={projector} alt="" />
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}
                        <div className="absolute bottom-0 p-4 hidden md:block">
                            <h4 className="font-serif text-lg font-bold">Outdoor Projector</h4>
                            <p className="text-sm text-white/90">Movies under the stars</p>
                        </div>
                    </div>
                </div>

                {/* CARD 5 */}
                <div className="overflow-hidden rounded-lg md:rounded-xl row-span-2 col-span-2 md:col-span-1 md:row-span-1">
                    <div className="relative w-full h-full overflow-hidden">
                        {/* <ActivityVideo startAt={105} stopAt={116} thumbnailUrl={billiards} /> */}
                        <img src={billiards} alt="" />
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}
                        <div className="absolute bottom-0 p-4 hidden md:block">
                            <h4 className="font-serif text-lg font-bold">Indoor Games</h4>
                            <p className="text-sm text-white/90">All-weather recreation</p>
                        </div>
                    </div>
                </div>

                {/* CARD 4 */}
                <div className="overflow-hidden rounded-lg md:rounded-xl">
                    <div className="relative w-full h-full overflow-hidden">
                        {/* <ActivityVideo startAt={46} stopAt={48} thumbnailUrl={turf} /> */}
                        <img src={turf} alt="" className='w-full'/>
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}
                        <div className="absolute bottom-0 p-4 hidden md:block">
                            <h4 className="font-serif text-lg font-bold">Turf Court</h4>
                            <p className="text-sm text-white/90">Outdoor sports action</p>
                        </div>
                    </div>
                </div>

                {/* CARD 6 */}
                <div className="overflow-hidden rounded-lg md:rounded-xl">
                    <div className="relative w-full h-full overflow-hidden">
                        {/* <ActivityVideo startAt={117} stopAt={118} thumbnailUrl={humanfossball} /> */}
                        <img src={humanfossball} alt="" />
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}
                        <div className="absolute bottom-0 p-4 hidden md:block">
                            <h4 className="font-serif text-lg font-bold">Group Fun</h4>
                            <p className="text-sm text-white/90">Exclusive team activities</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
}
