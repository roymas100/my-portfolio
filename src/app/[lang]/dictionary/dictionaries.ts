import 'server-only'
import { DictionaryType } from './dictionary.interface'

export interface Dictionary {
  'en-US': () => Promise<DictionaryType>,
  'pt-BR': () => Promise<DictionaryType>,
}

const dictionaries: Dictionary = {
  'en-US': () => import('./en').then(module => module.default as DictionaryType),
  'pt-BR': () => import('./pt').then(module => module.default as DictionaryType)
}

export const getDictionary = async (locale: keyof Dictionary) => dictionaries[locale]()
