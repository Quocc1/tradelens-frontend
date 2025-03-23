import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-6 md:px-10 lg:px-16 py-4">

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 md:mb-0">
            ©
            {' '}
            {new Date().getFullYear()}
            {' '}
            {t('tradeLens')}
            .
            {' '}
            {t('allRightsReserved')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <Link href="/terms" className="hover:text-foreground transition-colors">
              {t('terms')}
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              {t('privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
