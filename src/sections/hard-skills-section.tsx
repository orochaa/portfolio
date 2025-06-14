import { GlowContainer } from '@/components/glow-container'
import { Title } from '@/components/title'
import { useTranslation } from '@/hooks/use-translation'
import type { Language } from '@/lib/i18n/locales/types'
import type { IconType } from 'react-icons'
import {
  HiOutlineChip,
  HiOutlineClipboardList,
  HiOutlineCloudUpload,
  HiOutlineCode,
  HiOutlinePuzzle,
  HiOutlineScale,
} from 'react-icons/hi'

export function HardSkillsSection(): React.JSX.Element {
  const { t, lang } = useTranslation()

  return (
    <section id="hard-skills" className="bg-slate-950 py-20">
      <div className="mx-auto w-11/12 max-w-6xl">
        <Title className="mx-auto mb-4 w-fit px-1 after:left-1/2 after:w-5/7 after:-translate-x-1/2 after:from-cyan-500 after:via-blue-500 after:to-cyan-500">
          {t('hard-skills.title')}
        </Title>
        <p className="mb-8 text-center text-sm text-zinc-100">
          {t('hard-skills.subtitle')}
        </p>
        <div className="mx-auto grid w-fit grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hardSkills.map(hardSkill => (
            <GlowContainer
              key={hardSkill.title.en}
              title={hardSkill.title[lang]}
              containerClassName="rounded-xl bg-zinc-800 p-1"
              glowClassName="size-[52rem] from-violet-500"
            >
              <div className="relative h-full rounded-xl bg-zinc-900 p-10 lg:aspect-10/9">
                <div className="mx-auto mb-4 w-fit rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-3.5 drop-shadow-[0.25rem_0.25rem_1.5rem] drop-shadow-purple-500/40">
                  <hardSkill.Icon size={48} className="shrink-0" />
                </div>
                <p className="mx-auto mb-2 text-center text-base font-bold text-balance sm:text-lg">
                  {hardSkill.title[lang]}
                </p>
                <p className="text-center text-sm text-pretty text-neutral-200 sm:text-base">
                  {hardSkill.description[lang]}
                </p>
              </div>
            </GlowContainer>
          ))}
        </div>
      </div>
    </section>
  )
}

interface HardSkill {
  Icon: IconType
  title: Record<Language, string>
  description: Record<Language, string>
}

const hardSkills: HardSkill[] = [
  {
    Icon: HiOutlineCode,
    title: {
      'pt-BR': 'Criação de APIs REST e GraphQL',
      en: 'API Development with REST and GraphQL',
    },
    description: {
      'pt-BR':
        'Desenvolvo APIs modernas com validação, autenticação e documentação integradas.',
      en: 'I build modern APIs with validation, authentication, and integrated documentation.',
    },
  },
  {
    Icon: HiOutlineScale,
    title: {
      'pt-BR': 'Arquitetura de Microsserviços',
      en: 'Microservices Architecture',
    },
    description: {
      'pt-BR':
        'Projeto sistemas desacoplados com foco em escalabilidade, resiliência e autonomia.',
      en: 'I design decoupled systems focused on scalability, resilience, and autonomy.',
    },
  },
  {
    Icon: HiOutlinePuzzle,
    title: {
      'pt-BR': 'Design Patterns e Arquitetura Limpa',
      en: 'Design Patterns and Clean Architecture',
    },
    description: {
      'pt-BR':
        'Utilizo padrões de projeto e arquitetura limpa para garantir código escalável e testável.',
      en: 'I apply design patterns and clean architecture to ensure scalable, testable codebases.',
    },
  },
  {
    Icon: HiOutlineChip,
    title: {
      'pt-BR': 'Integração com Inteligência Artificial',
      en: 'AI Integration',
    },
    description: {
      'pt-BR':
        'Integro modelos de IA a produtos digitais, com foco em desempenho e controle de tokens.',
      en: 'I integrate AI models into digital products, focusing on performance and token control.',
    },
  },
  {
    Icon: HiOutlineClipboardList,
    title: {
      'pt-BR': 'Testes Automatizados e Qualidade de Código',
      en: 'Automated Testing and Code Quality',
    },
    description: {
      'pt-BR': 'Garanto qualidade com testes unitários e testes de integração.',
      en: 'I ensure quality with unit and integration tests.',
    },
  },
  {
    Icon: HiOutlineCloudUpload,
    title: {
      'pt-BR': 'Deploy com Docker e Nuvem',
      en: 'Deployment with Docker and Cloud',
    },
    description: {
      'pt-BR':
        'Automatizo o deploy de aplicações com Docker e serviços em nuvem como AWS.',
      en: 'I automate app deployments using Docker and cloud services like AWS.',
    },
  },
]
