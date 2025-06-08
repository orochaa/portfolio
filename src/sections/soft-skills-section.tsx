import { Title } from '@/components/title'
import { useTranslation } from '@/hooks/use-translation'
import type { Language } from '@/lib/i18n/locales/types'
import type { IconType } from 'react-icons'
import {
  HiOutlineAcademicCap,
  HiOutlineChartBar,
  HiOutlineLightningBolt,
  HiOutlineRefresh,
  HiOutlineSearchCircle,
} from 'react-icons/hi'
import { HiOutlineUserGroup } from 'react-icons/hi2'
import { IoChevronUp } from 'react-icons/io5'

export function SoftSkillsSection(): React.JSX.Element {
  const { t, lang } = useTranslation()

  return (
    <div id="soft-skills" className="bg-slate-950 py-20">
      <div className="mx-auto w-11/12 max-w-6xl">
        <Title className="mx-auto mb-4 w-fit px-1 after:left-1/2 after:w-5/7 after:-translate-x-1/2 after:from-cyan-500 after:via-blue-500 after:to-cyan-500">
          {t('soft-skills.title')}
        </Title>
        <p className="mb-8 text-center text-sm text-zinc-100">
          {t('soft-skills.subtitle')}
        </p>
        <div className="mx-auto grid w-fit grid-cols-2 gap-6 sm:grid-cols-3">
          {softSkills.map(softSkill => (
            <div
              key={softSkill.title.en}
              title={softSkill.title[lang]}
              className="group/skill relative overflow-hidden rounded-xl"
            >
              <div className="flex h-full flex-col items-center justify-center gap-2 rounded-xl border-4 border-zinc-800 bg-zinc-900 p-6 sm:aspect-square">
                <div className="rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-3.5">
                  <softSkill.Icon size={48} className="shrink-0" />
                </div>
                <p className="flex max-w-52 flex-col text-center text-base font-bold text-balance sm:text-lg">
                  {softSkill.title[lang]}
                </p>
              </div>
              <IoChevronUp
                className="animate-bounce-2 absolute bottom-0 left-1/2 shrink-0 -translate-x-1/2 text-violet-400"
                size={30}
              />
              <div className="absolute inset-x-0 -bottom-full flex size-full items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-4 opacity-0 transition-all duration-500 group-hover/skill:bottom-0 group-hover/skill:opacity-100 group-active/skill:bottom-0 group-active/skill:opacity-100">
                <p className="text-center text-sm text-balance sm:text-base">
                  {softSkill.description[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

interface SoftSkill {
  Icon: IconType
  title: Record<Language, string>
  description: Record<Language, string>
}

const softSkills: SoftSkill[] = [
  {
    Icon: HiOutlineUserGroup,
    title: {
      'pt-BR': 'Comunicação Colaborativa',
      en: 'Collaborative Communication',
    },
    description: {
      'pt-BR':
        'Facilidade em comunicar ideias entre áreas técnicas e de negócio, promovendo alinhamento e entendimento.',
      en: 'Skilled at communicating across technical and business teams, fostering alignment and understanding.',
    },
  },
  {
    Icon: HiOutlineLightningBolt,
    title: {
      'pt-BR': 'Proatividade e Iniciativa',
      en: 'Proactivity and Initiative',
    },
    description: {
      'pt-BR':
        'Identifico oportunidades de melhoria e proponho soluções com foco em resultado e eficiência.',
      en: 'I identify improvement opportunities and propose solutions focused on results and efficiency.',
    },
  },
  {
    Icon: HiOutlineRefresh,
    title: {
      'pt-BR': 'Adaptabilidade e Aprendizado Contínuo',
      en: 'Adaptability and Continuous Learning',
    },
    description: {
      'pt-BR':
        'Aprendo novas tecnologias com rapidez e me adapto bem a diferentes contextos e demandas.',
      en: 'Quick to learn new technologies and adapt to changing contexts and demands.',
    },
  },
  {
    Icon: HiOutlineAcademicCap,
    title: {
      'pt-BR': 'Liderança Técnica e Mentoria',
      en: 'Technical Leadership and Mentoring',
    },
    description: {
      'pt-BR':
        'Compartilho conhecimento e ajudo a elevar o nível técnico do time através de boas práticas.',
      en: 'I share knowledge and help raise the technical bar through best practices.',
    },
  },
  {
    Icon: HiOutlineSearchCircle,
    title: {
      'pt-BR': 'Pensamento Crítico e Resolução de Problemas',
      en: 'Critical Thinking and Problem Solving',
    },
    description: {
      'pt-BR':
        'Analiso sistemas e proponho soluções escaláveis para problemas técnicos complexos.',
      en: 'I analyze systems and design scalable solutions to complex technical problems.',
    },
  },
  {
    Icon: HiOutlineChartBar,
    title: {
      'pt-BR': 'Orientação a Resultados',
      en: 'Results-Driven',
    },
    description: {
      'pt-BR':
        'Foco em entregar soluções com impacto real, qualidade e alinhamento com os objetivos do negócio.',
      en: 'Focused on delivering high-impact solutions aligned with business goals and quality.',
    },
  },
]
