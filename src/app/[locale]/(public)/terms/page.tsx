import { getTranslations } from 'next-intl/server';
import Terms from './terms';

type ITermsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: ITermsPageProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Terms',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function TermsPage() {
  return <Terms />;
}
