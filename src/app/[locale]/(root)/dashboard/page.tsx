import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Dashboard',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Dashboard() {
  return (
    <div className="py-5 [&_p]:my-6">
      <h1 className="text-2xl font-bold text-red-500">Dashboard</h1>
    </div>
  );
}
