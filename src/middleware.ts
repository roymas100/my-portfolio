import { match } from '@formatjs/intl-localematcher'
import Negotiator, { Headers } from 'negotiator'
import { NextRequest, NextResponse } from 'next/server'

const locales = ['en-US', 'pt-BR']
const defaultLocale = 'en-US'

// Get the preferred locale, similar to the above or using a library
function getLocale (request: NextRequest) {
  const negotiatorHeaders = {} as Headers
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  const locale = match(languages, locales, defaultLocale)
  return locale
}

export function middleware (request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale || pathname.endsWith('.png') || pathname.endsWith('.jpeg') || pathname.endsWith('.jpg') || pathname.endsWith('.pdf')) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)'
    // Optional: only run on root (/) URL
    // '/'
  ]
}
