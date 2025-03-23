'use client';

import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { getCurrentDate } from '@/libs/utils';
import { AlertCircle, ArrowLeft, BookOpen, FileText, Lock, Shield, UserCheck, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function Terms() {
  const t = useTranslations('Terms');
  const currentDate = getCurrentDate(t('locale'));
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container py-10 px-6 md:px-10 lg:px-16">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push('/dashboard')}
          className="mb-8 flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {t('back')}
        </Button>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
            <p className="text-muted-foreground">
              {t('last_updated')}
              {currentDate}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">{t('your_account')}</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {t('your_account_description')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('your_account_description_2')}
              </p>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">{t('our_services')}</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {t('our_services_description')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('our_services_description_2')}
              </p>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">{t('your_conduct')}</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {t('your_conduct_description')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('your_conduct_description_2')}
              </p>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">{t('intellectual_property')}</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {t('intellectual_property_description')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('intellectual_property_description_2')}
              </p>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">{t('disclaimers')}</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {t('disclaimers_description')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('disclaimers_description_2')}
              </p>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">{t('liability')}</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {t('liability_description')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('liability_description_2')}
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold">{t('changes')}</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t('changes_description')}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
