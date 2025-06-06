import { useBlendy } from '@/hooks/use-blendy'
import { useWindowSize } from '@/hooks/use-window-size'
import type { Project } from '@/lib/data/projects'
import type { Language } from '@/lib/i18n/locales/types'
import { RefreshCcw } from 'lucide-react'
import { createPortal } from 'react-dom'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { MdClose } from 'react-icons/md'

export interface ProjectMediaProps {
  project: Project
  lang: Language
}

export function ProjectMedia(props: ProjectMediaProps): React.JSX.Element {
  const { project, lang } = props

  const blendy = useBlendy(project.name)
  const { windowWidth } = useWindowSize()

  return (
    <>
      <button
        type="button"
        className="relative block h-[16.75rem] w-full overflow-hidden rounded-t-md text-left"
        disabled={!project.videoUrl && !project.imgUrl}
        onClick={blendy.handleOpen}
        data-blendy-from={blendy.id}
      >
        {project.videoUrl ? (
          <video
            src={project.videoUrl}
            autoPlay
            playsInline
            loop
            muted
            controls={false}
            className="mx-auto h-full"
          />
        ) : project.imgUrl ? (
          <img
            src={project.imgUrl}
            alt={`${project.name}.jpg`}
            loading="lazy"
            className="mx-auto h-full object-contain"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500/35 to-orange-300/35">
            <div className="max-w-5/6">
              <p className="text-lg font-semibold">🚀 {project.displayName}</p>
              <p className="text-zinc-100">{project.description[lang]}</p>
            </div>
          </div>
        )}
      </button>
      {!!blendy.isOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center">
            <div
              role="button"
              tabIndex={0}
              className="absolute inset-0 cursor-default bg-black/40"
              onClick={blendy.handleClose}
            />
            <div className="relative z-10 max-w-11/12">
              {windowWidth < 640 && (
                <div className="absolute -top-18 left-1/2 -translate-x-1/2 text-zinc-200">
                  <div className="relative">
                    <IoPhonePortraitOutline
                      size={60}
                      className="animate-rotate-device"
                    />
                    <RefreshCcw
                      size={20}
                      className="animate-rotate-device-indicator absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"
                    />
                  </div>
                </div>
              )}
              <button
                type="button"
                className="absolute top-4.5 right-4.5 z-10 text-zinc-500 transition hover:text-zinc-200 active:text-zinc-200"
                onClick={blendy.handleClose}
              >
                <MdClose className="size-6 shrink-0" />
              </button>
              <div
                className="max-h-[70svh] overflow-hidden rounded-xl border border-zinc-600 bg-zinc-800 sm:h-[80svh]"
                data-blendy-to={blendy.id}
              >
                {project.videoUrl ? (
                  <video
                    src={project.videoUrl}
                    className="h-full"
                    preload="none"
                    controls
                    autoPlay
                    muted
                    loop
                  />
                ) : project.imgUrl ? (
                  <img
                    src={project.imgUrl}
                    alt={`${project.name}.jpg`}
                    className="mx-auto h-full object-contain"
                  />
                ) : (
                  <div className="flex h-full w-2xl max-w-full items-center justify-center bg-gradient-to-br from-blue-500/35 to-orange-300/35">
                    <div className="max-w-4/6">
                      <p className="text-lg font-semibold">
                        🚀 {project.displayName}
                      </p>
                      <p className="text-pretty text-zinc-100">
                        {project.description[lang]}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
