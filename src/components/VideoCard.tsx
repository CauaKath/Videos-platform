import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classnames from 'classnames';

interface VideoCardProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'gameplay';
}

export function VideoCard(props: VideoCardProps) {
  const { slug } = useParams<{ slug: string }>();

  const isVideoAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })

  const isActiveVideo = slug === props.slug;
  
  return(
    <Link to={`/main/video/${props.slug}`} className={classnames("group", {
      "pointer-events-none": !isVideoAvailable,
    })}>
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>

      <div className={classnames("rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500", {
        'bg-green-500': isActiveVideo,
      })}>
        <header className="flex items-center justify-between">
          {isVideoAvailable ? (
            <span className={classnames("text-sm font-medium flex items-center gap-2", {
              'text-white': isActiveVideo,
              'text-blue-500': !isActiveVideo,
            })}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          
          <span className={classnames("text-xs rounded py-[2px] px-2 text-white border font-cold", {
            'border-white': isActiveVideo,
            'border-green-300': !isActiveVideo,
          })}>
            {props.type === 'live' ? 'AO VIVO' : 'GAMEPLAY'}
          </span>
        </header>

        <strong className={classnames("mt-5 block", {
          'text-white': isActiveVideo,
          'text-gray-200': !isActiveVideo,
        })}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}