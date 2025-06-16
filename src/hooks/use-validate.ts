/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react'
import type { z } from 'zod'

type ValidateError<T extends Record<string | number, unknown>> = {
  [K in keyof T]:
    | (T[K] extends Record<string, unknown>
        ? ValidateError<T[K]>
        : T[K] extends Record<string, unknown>[]
          ? Record<number, ValidateError<T[K][number]> | undefined> | string
          : string)
    | undefined
}

type ValidateData<T extends Record<string, unknown>> = {
  [K in keyof T]?:
    | (T[K] extends Record<string, unknown> ? ValidateData<T[K]> : T[K])
    | null
    | undefined
}

type ValidateResult<T extends Record<string, unknown>> =
  | {
      error: Omit<string, ''>
      parsedData?: undefined
    }
  | {
      error?: undefined
      parsedData: T
    }

interface ValidateState<T extends Record<string, unknown>> {
  validate: (data: ValidateData<T>) => ValidateResult<T>
  mergeError: (data: Partial<ValidateError<T>>) => void
  validationError: ValidateError<T>
}

/**
 * Hook to validate data with a Zod schema.
 *
 * @example
 * ```tsx
 * const schema = z.object({
 *  name: z.string().min(3),
 *  email: z.string().email(),
 * })
 *
 * const { validate, validationError, mergeError } = useValidate(schema, requestError)
 *
 * const handleSubmit = () => {
 *  const { error, parsedData } = validate({ name: 'John Doe', email: 'john@doe.com' })
 *
 *  if (error) {
 *    console.error(error)
 *    return
 *  }
 *
 *  console.log(parsedData)
 * }
 * ```
 *
 * @param schema The Zod schema to validate against.
 * @param requestError The error returned by the request.
 * @returns validate: (data: ValidateData<T>) => ValidateResult<T>, validationError: ValidateError<T>, mergeError: (data: Partial<ValidateError<T>>) => void
 */
export function useValidate<T extends Record<string, unknown>>(
  schema: z.Schema<T>
): ValidateState<T> {
  const [validationError, setValidationError] = useState(
    {} as unknown as ValidateError<T>
  )

  const validate = useCallback(
    (data: ValidateData<T>): ValidateResult<T> => {
      const validateResult = schema.safeParse(data)

      if (!validateResult.success) {
        const validationError = {} as unknown as ValidateError<T>
        const errors: string[] = []

        for (const issue of validateResult.error.issues) {
          let nestedValidationError: any = validationError

          for (const pathField of issue.path.slice(0, -1)) {
            nestedValidationError[pathField] ??= {}
            nestedValidationError = nestedValidationError[pathField]
          }

          const lastField = issue.path[issue.path.length - 1]
          nestedValidationError[lastField] = issue.message
          errors.push(issue.message)
        }

        setValidationError(validationError)

        return { error: errors.join(', ') }
      }

      setValidationError({} as unknown as ValidateError<T>)

      return { parsedData: validateResult.data }
    },
    [schema]
  )

  const mergeError = useCallback((error: Partial<ValidateError<T>>): void => {
    setValidationError(state => ({ ...state, ...error }))
  }, [])

  return { validate, validationError, mergeError }
}
