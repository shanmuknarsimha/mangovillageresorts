import { useEffect, useRef, useState } from "react";

interface ActivityVideoProps {
    startAt: number;
    stopAt: number;
    thumbnailUrl: string; // full URL or imported image
}

export default function ActivityVideo({
    startAt,
    stopAt,
    thumbnailUrl,
}: ActivityVideoProps) {
    console.log('thumbnailUrl', thumbnailUrl);
    const videoRef = useRef<HTMLDivElement>(null);
    const [showThumbnail, setShowThumbnail] = useState(true);

    useEffect(() => {
        const win = window as any;
        const $ = win.jQuery || win.$;

        if (videoRef.current && $ && $.fn && $.fn.YTPlayer) {
            const $el = $(videoRef.current);

            // init player
            // @ts-ignore
            $el.YTPlayer({
                videoURL: "https://youtu.be/XBhEN5hU4z0",
                containment: "self",
                autoPlay: true,
                mute: true,
                vol: 0,
                loop: true,
                startAt,
                stopAt,
                showControls: false,
                showYTLogo: false,
                quality: "hd1080",
                fitToBackground: false,
                optimizeDisplay: false,
                stopMovieOnBlur: false,
                useOnMobile: true,
                opacity: 1,
            });

            // force mute
            // @ts-ignore
            $el.YTPMute();

            // 👇 Hide thumbnail only when video actually starts playing
            const handleStart = () => setShowThumbnail(false);
            const handleError = () => setShowThumbnail(true);

            $el.on("YTPStart", handleStart);
            $el.on("YTPError", handleError);

            // cleanup on unmount
            return () => {
                $el.off("YTPStart", handleStart);
                $el.off("YTPError", handleError);
                // @ts-ignore
                if ($el.YTPPlayer) {
                    // @ts-ignore
                    $el.YTPPause();
                    // @ts-ignore
                    $el.YTPRemove();
                }
            };
        }
    }, [startAt, stopAt, thumbnailUrl]);

    return (
        <div className="relative w-full overflow-hidden rounded-xl aspect-video">
            {/* Thumbnail layer – always there until video has actually started */}
            {showThumbnail && (
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${thumbnailUrl})` }}
                />
            )}

            {/* Video layer – sits on top, becomes visible when ready */}
            <div
                ref={videoRef}
                className="absolute inset-0 w-full h-full pointer-events-none hidden"
                style={{ overflow: "hidden" }}
            />
        </div>
    );
}
