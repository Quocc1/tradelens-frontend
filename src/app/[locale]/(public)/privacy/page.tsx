import { getTranslations } from 'next-intl/server';
import Privacy from './privacy';

type IPrivacyPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IPrivacyPageProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Privacy',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function PrivacyPage() {
  return <Privacy />;
}
