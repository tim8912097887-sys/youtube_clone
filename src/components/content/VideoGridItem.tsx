import { useEffect, useRef, useState } from 'react';
import { formatDuration } from '../../utils/format-duration';
import { formatTimeAgo } from '../../utils/format-time';

type VideoGridItemProps = {
    id: string;
    title: string;
    channel: {
        id: string;
        name: string;
        profileUrl: string;
    };
    views: number;
    postedAt: Date;
    duration: number;
    thumbnailUrl: string;
    videoUrl: string;
};

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
    notation: 'compact',
});

const VideoGridItem = ({
    id,
    title,
    views,
    postedAt,
    duration,
    thumbnailUrl,
    videoUrl,
    channel,
}: VideoGridItemProps) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (!videoRef.current) return;
        if (isVideoPlaying) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isVideoPlaying]);

    return (
        <div
            className="flex flex-col gap-2"
            onMouseEnter={() => setIsVideoPlaying(true)}
            onMouseLeave={() => setIsVideoPlaying(false)}
        >
            <a href="/" className="relative aspect-video">
                <img
                    src={thumbnailUrl}
                    className={`block w-full h-full object-cover transform-[border-radius] duration-200 ${isVideoPlaying ? 'rounded-none' : 'rounded-xl'}`}
                />
                {/* Timestamp */}
                <div className="absolute bottom-1 right-1 bg-black/30 text-sm rounded px-0.5 text-neutral-300">
                    {formatDuration(duration)}
                </div>
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    src={videoUrl}
                    className={`block absolute w-full h-full object-cover inset-0 transition-opacity duration-200 ${isVideoPlaying ? 'opacity-100 delay-200' : 'opacity-0'}`}
                ></video>
            </a>
            <div className="flex gap-2">
                <a href={`/@${channel.id}`} className="shrink-0">
                    <img
                        src={channel.profileUrl}
                        className="w-12 h-12 rounded-full"
                        alt="account-image"
                    />
                </a>
                <div className="flex flex-col">
                    <a href={`/watch?v=${id}`} className="font-bold">
                        {title}
                    </a>
                    <a
                        href={`/@${channel.id}`}
                        className="text-sm text-neutral-500"
                    >
                        {channel.name}
                    </a>
                    <div className="text-sm text-neutral-500">
                        {VIEW_FORMATTER.format(views)} Views •{' '}
                        {formatTimeAgo(postedAt)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoGridItem;
