import { getCurationsInfo } from '@/lib/apis/server/eventsApi';
import { CurationsResponseDto } from '@/types/types';
import { cookies } from 'next/headers';
import React from 'react';
import ParticipantCard from '@/components/ParticipantCard';
import MatchingBlur from './_components/MatchingBlur';

const page = async ({
  params: { eventId },
}: {
  params: { eventId: string };
}) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');
  let curationsInfo: CurationsResponseDto | null = null;

  if (accessToken) {
    curationsInfo = await getCurationsInfo({ eventId, accessToken });
  }

  const isCurated = curationsInfo && curationsInfo.totalAttempts !== 0;

  return (
    <div className="px-6 pt-1">
      {!isCurated && <MatchingBlur eventId={eventId} />}

      {isCurated ? (
        <ul className="flex flex-col gap-3">
          {curationsInfo!.participants.map((info) => (
            <ParticipantCard
              key={info.id}
              participantRole={info.role}
              {...info}
              isCuration
            />
          ))}
        </ul>
      ) : (
        <ul className="flex flex-col gap-3">
          <ParticipantCard participantRole="GUEST" isCuration />
          <ParticipantCard participantRole="GUEST" isCuration />
          <ParticipantCard participantRole="GUEST" isCuration />
        </ul>
      )}
    </div>
  );
};

export default page;
