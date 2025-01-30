import { redirect } from 'next/navigation'
import { i18n } from '@/config/i18n.config'

export default function RootPage() {
  redirect(`/${i18n.defaultLocale}`)
}
