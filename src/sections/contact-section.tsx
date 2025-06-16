import { Title } from '@/components/title'
import { useTranslation } from '@/hooks/use-translation'
import { useValidate } from '@/hooks/use-validate'
import { useActionState } from 'react'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().email(),
  subject: z.string().min(1, 'Required'),
  message: z.string().min(1, 'Required'),
})

type Form = z.infer<typeof formSchema>

export function ContactSection(): React.JSX.Element {
  const { t } = useTranslation()

  const { validate, validationError } = useValidate(formSchema)

  const [, formAction, isPending] = useActionState<Partial<Form>, FormData>(
    async (_, formData): Promise<Form> => {
      const form = Object.fromEntries(formData.entries()) as Form
      const { parsedData, error } = validate(form)

      if (error) {
        return form
      }

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const res = await fetch(import.meta.env.VITE_CONTACT_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedData),
      })

      if (!res.ok) {
        const error = await res.text()
        alert(error || t('contact.alert.error.message'))

        return form
      }

      alert(t('contact.alert.success.message'))

      return {
        ...form,
        subject: '',
        message: '',
      }
    },
    {}
  )

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-slate-950 from-50% to-slate-800 py-20"
    >
      <div className="mx-auto mb-10 w-11/12 max-w-xl text-center">
        <Title className="mx-auto mb-4 w-fit px-1 after:left-1/2 after:w-5/7 after:-translate-x-1/2 after:from-cyan-500 after:via-blue-500 after:to-cyan-500">
          {t('contact.title')}
        </Title>
        <p className="mb-8 text-center text-sm text-pretty text-zinc-100">
          {t('contact.subtitle')}
        </p>
      </div>

      <form action={formAction} className="mx-auto w-11/12 max-w-3xl space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              {t('contact.form.name.label')}
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder={t('contact.form.name.placeholder')}
              className="block w-full rounded-sm border border-zinc-600 bg-zinc-900 p-1 text-base outline-hidden autofill:shadow-[inset_0_0_0px_1000px_#18181b] hover:border-zinc-500 focus:border-blue-500 focus:drop-shadow-[0_0_0.1rem] focus:drop-shadow-blue-500"
            />
            {!!validationError.name && (
              <span className="text-sm text-red-500">
                {validationError.name}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              {t('contact.form.email.label')}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder={t('contact.form.email.placeholder')}
              className="block w-full rounded-sm border border-zinc-600 bg-zinc-900 p-1 text-base outline-hidden autofill:shadow-[inset_0_0_0px_1000px_#18181b] hover:border-zinc-500 focus:border-blue-500 focus:drop-shadow-[0_0_0.1rem] focus:drop-shadow-blue-500"
            />
            {!!validationError.email && (
              <span className="text-sm text-red-500">
                {validationError.email}
              </span>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="mb-1 block text-sm font-medium">
            {t('contact.form.subject.label')}
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder={t('contact.form.subject.placeholder')}
            className="block w-full rounded-sm border border-zinc-600 bg-zinc-900 p-1 text-base outline-hidden autofill:shadow-[inset_0_0_0px_1000px_#18181b] hover:border-zinc-500 focus:border-blue-500 focus:drop-shadow-[0_0_0.1rem] focus:drop-shadow-blue-500"
          />
          {!!validationError.subject && (
            <span className="text-sm text-red-500">
              {validationError.subject}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium">
            {t('contact.form.message.label')}
          </label>
          <textarea
            id="message"
            name="message"
            placeholder={t('contact.form.message.placeholder')}
            rows={5}
            className="block w-full rounded-sm border border-zinc-600 bg-zinc-900 p-1 text-base outline-hidden autofill:shadow-[inset_0_0_0px_1000px_#18181b] hover:border-zinc-500 focus:border-blue-500 focus:drop-shadow-[0_0_0.1rem] focus:drop-shadow-blue-500"
          />
          {!!validationError.message && (
            <span className="text-sm text-red-500">
              {validationError.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="group/submit relative mx-auto block w-xs max-w-full overflow-hidden rounded-md bg-blue-500 px-6 py-3 transition-colors active:bg-blue-400 disabled:bg-blue-400"
          disabled={isPending}
        >
          <span className="absolute top-0 left-1/2 h-[140%] w-0 -translate-x-1/2 bg-blue-400 transition-[width] group-hover/submit:w-full" />
          <span className="relative">
            {isPending ? t('contact.form.pending') : t('contact.form.submit')}
          </span>
        </button>
      </form>
    </section>
  )
}
