'use client';

import { Event, Ticket, TicketStatus } from '@/models';
import { consumeTicket, getTicket } from '@/server-actions/ticket.action';
import { getUser } from '@/server-actions/user.action';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';
import { getEvent } from '@/server-actions/event.action';
import Loading from '@/components/Loading';
import { notifyError, notifySuccess } from '@/utils';

export default function TicketCheckComponent({
  params,
}: {
  params: { id: string };
}) {
  return (
    <Suspense>
      <TicketUI params={params} />
    </Suspense>
  );
}

export function TicketUI({ params }: { params: { id: string } }) {
  const [ticket, setTicket] = useState<Ticket>();
  const [event, setEvent] = useState<Event>();
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const router = useRouter();
  const handleValidate = async () => {
    setLoading(true);
    const resp = await consumeTicket(params.id);
    if (resp.error) notifyError(resp.error);
    else {
      notifySuccess({ description: 'Ticket validado com sucesso!' });
      // @ts-ignore
      setTicket((ticket) => ({ ...ticket, status: TicketStatus.CONSUMED }));
    }
    setLoading(false);
  };

  useEffect(() => {
    const fetchTicket = async () => {
      const resp = await getTicket(params.id);
      if ('error' in resp) {
        router.push('/');
        notifyError({ description: resp.error });
        return;
      }
      setTicket(resp);

      const response = await getEvent(resp.event_id);
      if ('error' in response) {
        router.push('/');
        notifyError({ description: response.error });
        return;
      }
      setEvent(response);

      const respUser = await getUser(resp.enrollment.user_id);
      if ('error' in respUser) {
        router.push('/');
        notifyError({ description: respUser.error });
        return;
      }
      setUser(respUser);
      setIsFetching(false);
    };
    fetchTicket();
  }, [params.id]);

  const getAge = (birthDate: string) => {
    if (!birthDate) return '';
    const today = new Date();
    const [day, month, year] = birthDate.split('/');
    const birth = new Date(`${year}-${month}-${day}`);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    const d = today.getDate() - birth.getDate();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate()) || d < 0) {
      age--;
    }
    return age + ' anos';
  };

  if (isFetching) {
    return <Loading />;
  } else
    return (
      <>
        {/* desktop */}
        <div className='ticket hidden md:block'>
          <div className='ticket-content-wrapper hidden flex-col justify-between md:flex'>
            <div className='text-center'>
              <span className='text-3xl font-bold'>
                TICKET - {event?.name} (
                {event?.init_date.toLocaleString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                })}
                )
              </span>
              <p className='text-base'>
                INSTITUTO FEDERAL DE SÃO PAULO - CUBATÃO
              </p>
            </div>

            <div className='px-12'>
              <p>Nome cadastrado: {user?.name || 'Carregando...'}</p>
              <p>Idade: {getAge(user?.birth_date)}</p>
              <p>Documento: {user?.document_initials}</p>
              <p className='mt-2 text-center text-green-500'>
                {ticket?.status}
              </p>
            </div>
            <div className='mx-auto'>
              <Button
                onPress={handleValidate}
                isLoading={loading}
                className='bg-btn text-opacity-100 mt-8 rounded-md px-3 py-2 text-xl font-extrabold text-black'
              >
                Validar
              </Button>
            </div>
          </div>
        </div>

        {/* mobile */}

        <div className='ticket-vertical block md:hidden'>
          <div className='ticket-content-wrapper-vertical flex flex-col justify-between md:hidden'>
            <div className='text-center'>
              <span className='text-3xl font-bold'>
                TICKET - {event?.name} (
                {event?.init_date.toLocaleString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                })}
                )
              </span>
              <p className='text-base'>
                INSTITUTO FEDERAL DE SÃO PAULO - CUBATÃO
              </p>
            </div>

            <div className='text-center'>
              <p>{user?.name || 'Carregando...'}</p>
              <p>{getAge(user?.birth_date)}</p>
              <p>{user?.document_initials}</p>
              <p className='mt-2 text-green-500'>{ticket?.status}</p>
            </div>
            <div className='mx-auto'>
              <Button
                onPress={handleValidate}
                isLoading={loading}
                className='bg-btn text-opacity-100 mt-8 rounded-md px-3 py-2 text-xl font-extrabold text-black'
              >
                Validar
              </Button>
            </div>
          </div>
        </div>
      </>
    );
}
