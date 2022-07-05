import { useGetVideosQuery } from "../graphql/generated";
import { VideoCard } from "./VideoCard";

export function Sidebar() {
  const { data } = useGetVideosQuery();

  if(!data) {
    return <p>Loading...</p>
  }

  return(
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de Aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.videos.map(video => {
          return (
            <VideoCard
              key={video.id}
              title={video.title} 
              slug={video.slug}
              availableAt={new Date(video.availableAt)}
              type={video.videoType}
            />
          )
        })}
      </div>
    </aside>
  )
}