import { enUS, viVN } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

export default async function AuthLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  let clerkLocale = enUS;
  let signInUrl = '/sign-in';
  let signUpUrl = '/sign-up';
  let dashboardUrl = '/dashboard';
  let afterSignOutUrl = '/';
  let termsUrl = '/terms';
  let privacyUrl = '/privacy';

  if (locale === 'vi') {
    clerkLocale = viVN;
  }

  // if (locale !== routing.defaultLocale) {
  signInUrl = `/${locale}${signInUrl}`;
  signUpUrl = `/${locale}${signUpUrl}`;
  dashboardUrl = `/${locale}${dashboardUrl}`;
  afterSignOutUrl = `/${locale}${afterSignOutUrl}`;
  termsUrl = `/${locale}${termsUrl}`;
  privacyUrl = `/${locale}${privacyUrl}`;
  // }

  return (
    <ClerkProvider
      localization={clerkLocale}
      signInUrl={signInUrl}
      signUpUrl={signUpUrl}
      signInFallbackRedirectUrl={dashboardUrl}
      signUpFallbackRedirectUrl={dashboardUrl}
      afterSignOutUrl={afterSignOutUrl}
    >
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-950">
        <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          {props.children}

          <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
            <p>
              {locale === 'vi'
                ? 'Bằng cách đăng nhập/đăng ký, bạn đồng ý với '
                : 'By signing in/signing up, you agree to our '}
              <Link href={termsUrl} className="text-blue-600 hover:underline dark:text-blue-400">
                {locale === 'vi' ? 'Điều khoản dịch vụ' : 'Terms of Service'}
              </Link>
              {` ${locale === 'vi' ? 'và' : 'and'} `}
              <Link href={privacyUrl} className="text-blue-600 hover:underline dark:text-blue-400">
                {locale === 'vi' ? 'Chính sách bảo mật' : 'Privacy Policy'}
              </Link>
            </p>
          </div>
        </div>

        <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 p-4">
          <p>
            ©
            {new Date().getFullYear()}
            {' '}
            TradeLens.
            {locale === 'vi' ? ' Đã đăng ký Bản quyền.' : ' All Rights Reserved.'}
          </p>
        </footer>
      </div>
    </ClerkProvider>
  );
}
