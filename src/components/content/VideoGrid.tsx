import { videos } from '../../data/content';
import VideoGridItem from './VideoGridItem';

const VideoGrid = () => {
    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
            {videos.map((video) => (
                <VideoGridItem key={video.id} {...video} />
            ))}
        </div>
    );
};

export default VideoGrid;
