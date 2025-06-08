import type { LocaleTranslation } from '@/lib/i18n/locales/types'

export const pt: LocaleTranslation = {
  header: {
    lang: {
      name: 'PT/BR',
      imgUrl: '/assets/brazil-flag.svg',
      imgAlt: 'brazil-flag.svg',
    },
    home: 'Inicio',
  },
  about: {
    hello: 'Olá,',
    iam: 'Me chamo',
    description:
      'Desenvolvedor de Software com 5 anos de experiência, focado em criar soluções escaláveis com boas práticas e arquitetura limpa. Atuo em todas as etapas do desenvolvimento, colaborando com times diversos e buscando melhorias contínuas no produto e nos processos.',
  },
  education: {
    title: 'Cursos e Formações',
  },
  technologies: {
    title: 'Tecnologias',
    subtitle: 'Principais tecnologias com que eu trabalho.',
    hint: 'Passe o cursor no card para ver a descrição da tecnologia',
  },
  'hard-skills': {
    title: 'Capacidades Técnicas',
    subtitle: 'Habilidades técnicas e conhecimentos específicos',
  },
  'soft-skills': {
    title: 'Soft Skills',
    subtitle: 'Habilidades interpessoais e comportamentais',
  },
  projects: {
    title: 'Projetos',
    categories: 'Categorias',
    filters: 'Filtros',
    notFound: '😦 Nenhum projeto encontrado com os filtros selecionados.',
  },
  project: {
    link: 'Abrir para aplicação',
    github: 'Abrir repositório',
    private: 'privado',
    privateTitle: 'Projeto é privado',
    downloadsPerMonth: '{{downloads}}/mês',
    downloadsTitle: 'Downloads por mês',
  },
  learnMore: {
    title: 'Ver mais',
    documentation: 'Ver documentação',
  },
}
