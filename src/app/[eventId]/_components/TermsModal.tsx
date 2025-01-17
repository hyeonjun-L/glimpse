'use client';

import { useClickAway } from '@uidotdev/usehooks';

function TermsModal({ closeHandler }: { closeHandler: () => void }) {
  const ref = useClickAway<HTMLDivElement>(() => {
    closeHandler();
  });

  return (
    <div className="absolute left-1/2 top-1/2 z-event flex size-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center bg-black/40 px-6 text-gray-B80">
      <div ref={ref} className="h-[400px] w-full rounded-3xl bg-white p-6">
        <p className="text-sm font-bold">
          Consent to Collect and Use Personal Information
        </p>
        <p className="py-2 text-xs">
          I agree to register my profile card on Glimpse, allowing other
          participants to view my profile information for networking.
          <br />
          <br />- Information Collected and Used: Name, Email, Brief intro,
          Profile photo, Job category, Job title, Company/Organization,
          Socials/Links
        </p>
        <p className="mt-4 pt-1 text-sm font-bold">
          개인정보 수집 및 이용 동의
        </p>
        <p className="py-2 text-xs">
          네트워킹을 위해 다른 참가자들이 내 정보를 볼 수 있도록 글림스에 내
          프로필 카드를 등록하는 것에 동의합니다.
          <br />
          <br />- 수집 및 이용 항목: 이름, 이메일, 자기소개, 프로필 사진, 직군,
          직업, 회사/소속, SNS/링크
        </p>

        <button
          type="button"
          onClick={closeHandler}
          className="mt-4 flex h-[46px] w-full items-center justify-center rounded-lg bg-yellow-600 font-bold text-blue-secondary"
        >
          Got it
        </button>
      </div>
    </div>
  );
}

export default TermsModal;
