'use client';

import { useEffect } from 'react';
import { useMatchStore } from '@/store/matchStore';
import { postCurations } from '@/lib/apis/eventsApi';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { RefreshSVG } from '@/icons/index';
import Blur from './Blur';

function MatchingComponent({ eventId }: { eventId: string }) {
  const router = useRouter();
  const { isComplete } = useMatchStore((state) => ({
    isComplete: state.isComplete,
  }));

  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => postCurations({ eventId: id }),
    onSuccess: () => {
      router.refresh();
    },
  });

  useEffect(() => {
    if (isComplete) {
      mutate(eventId);
    }
  }, [eventId, isComplete, mutate]);

  const reMachingHandler = () => {
    mutate(eventId);
  };

  return isPending ? (
    <Blur isPending />
  ) : (
    <div className="relative ml-auto mr-14 size-[1px]">
      <button
        type="submit"
        className="fixed bottom-0 z-10 mb-4 mr-4 flex size-[66px] items-center justify-center rounded-full bg-gradient-to-bl from-yellow-primary to-blue-B30"
        aria-label="re-matching"
        onClick={reMachingHandler}
      >
        <div className="flex size-[62px] items-center justify-center rounded-full bg-blue-secondary">
          <div className="flex size-14 items-center justify-center rounded-full bg-yellow-primary">
            <RefreshSVG />
          </div>
        </div>
      </button>
    </div>
  );
}

export default MatchingComponent;