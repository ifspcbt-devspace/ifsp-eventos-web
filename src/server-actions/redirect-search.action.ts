'use server';

import { redirect, RedirectType } from 'next/navigation';

export async function redirectSearch(formData: FormData) {
  const search = formData.get('search') as string;
  redirect(
    search == '' ? '/events' : `/search?query=${search}`,
    RedirectType.push,
  );
}
