'use client';

import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { getCurrentDate } from '@/libs/utils';
import { ArrowLeft, Database, Eye, FileText, Globe, Lock, Share2, Shield, UserCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function Privacy() {
  const t = useTranslations('Privacy');
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
                <Database className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">{t('data_we_collect')}</h2>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <UserCheck className="h-3 w-3 text-primary" />
                  </span>
                  <span>{t('account_info')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <UserCheck className="h-3 w-3 text-primary" />
                  </span>
                  <span>{t('financial_preferences_and_trading_history')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <UserCheck className="h-3 w-3 text-primary" />
                  </span>
                  <span>{t('device_and_usage_information')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <UserCheck className="h-3 w-3 text-primary" />
                  </span>
                  <span>{t('location_data_with_your_permission')}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">{t('how_we_use_it')}</h2>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <UserCheck className="h-3 w-3 text-primary" />
                  </span>
                  <span>{t('provide_and_improve_our_services')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <UserCheck className="h-3 w-3 text-primary" />
                  </span>
                  <span>{t('process_transactions_and_send_notifications')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <UserCheck className="h-3 w-3 text-primary" />
                  </span>
                  <span>{t('personalize_your_experience')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <UserCheck className="h-3 w-3 text-primary" />
                  </span>
                  <span>{t('detect_and_prevent_fraud')}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <Share2 className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">{t('data_sharing')}</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{t('data_sharing_description')}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <UserCheck className="h-3 w-3 text-primary" />
                  </span>
                  <span>{t('service_providers_who_help_us_operate')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <UserCheck className="h-3 w-3 text-primary" />
                  </span>
                  <span>{t('when_required_by_law_or_to_protect_rights')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <UserCheck className="h-3 w-3 text-primary" />
                  </span>
                  <span>{t('with_your_explicit_consent')}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">{t('your_rights')}</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{t('your_rights_description')}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <UserCheck className="h-3 w-3 text-primary" />
                  </span>
                  <span>{t('access_and_update_your_information')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <UserCheck className="h-3 w-3 text-primary" />
                  </span>
                  <span>{t('delete_your_data_with_some_exceptions')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <UserCheck className="h-3 w-3 text-primary" />
                  </span>
                  <span>{t('opt_out_of_marketing_communications')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <UserCheck className="h-3 w-3 text-primary" />
                  </span>
                  <span>{t('control_cookie_preferences')}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">{t('security')}</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {t('security_description')}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <UserCheck className="h-3 w-3 text-primary" />
                  </span>
                  <span>{t('encryption_of_sensitive_information')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <UserCheck className="h-3 w-3 text-primary" />
                  </span>
                  <span>{t('regular_security_assessments')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <UserCheck className="h-3 w-3 text-primary" />
                  </span>
                  <span>{t('access_controls_and_authentication')}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">{t('international')}</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {t('international_description')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('international_description_2')}
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
