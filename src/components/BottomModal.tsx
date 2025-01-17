'use client';

import { CrossSVG } from '@/icons/index';
import { useClickAway } from '@uidotdev/usehooks';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface BottomModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}

function BottomModal({ children, closeModal }: BottomModalProps) {
  const pathname = usePathname();

  const closeHandler = () => {
    window.history.back();
    closeModal();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    window.history.pushState(null, '', pathname);

    const handlePopState = () => {
      closeModal();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.body.style.overflow = 'auto';
    };
  }, [pathname, closeModal]);

  const ref = useClickAway<HTMLElement>(() => {
    closeHandler();
  });

  return (
    <article className="fixed left-1/2 top-1/2 z-event h-screen w-screen -translate-x-1/2 -translate-y-1/2 transform bg-black/40">
      <section
        ref={ref}
        className="absolute bottom-0 left-1/2 w-full max-w-sm -translate-x-1/2 transform rounded-t-3xl bg-white pt-[42px]"
      >
        <button
          type="button"
          className="absolute right-[18px] top-[18px]"
          aria-label="close-modal"
          onClick={closeHandler}
        >
          <CrossSVG className="size-6" />
        </button>
        {children}
      </section>
    </article>
  );
}

export default BottomModal;
