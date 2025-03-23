import { ThemeProvider } from '@/components/theme-provider';
import { routing } from '@/libs/i18n/routing';
import { QueryClientProvider } from '@/providers/QueryClientProvider';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import '@/styles/globals.css';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryClientProvider>
            <NextIntlClientProvider>{children}</NextIntlClientProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
