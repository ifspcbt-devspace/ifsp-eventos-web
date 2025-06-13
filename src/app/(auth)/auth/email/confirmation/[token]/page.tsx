import { Suspense } from 'react';
import AccountConfirmation from '@/components/confirmation/AccountConfirmation';
import { Metadata } from 'next';
import Loading from '@/components/Loading';

export const metadata: Metadata = {
  title: 'Ativação de conta',
};

export default async function ConfirmAccount(props: {
  params: Promise<{ token: string }>;
}) {
  const params = await props.params;
  return (
    <Suspense fallback={<Loading />}>
      <AccountConfirmation token={params.token} />
    </Suspense>
  );
}
