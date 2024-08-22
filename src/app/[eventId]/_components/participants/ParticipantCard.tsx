import { DefaultProfileSVG } from '@/icons/index';
import { EventParticipantProfileCardDto } from '@/types/types';
import Image from 'next/image';
import SocialContainer from './SocialContainer';
import WishlistButton from './WishlistButton';

type ParticipantCardProps = {
  participantRole: 'HOST' | 'GUEST';
} & Partial<EventParticipantProfileCardDto>;

function ParticipantCard({
  participantRole,
  user,
  isWishlisted,
}: ParticipantCardProps) {
  const name = user?.name || 'Emma Stone';
  const jobs = user?.jobs || [{ name: 'Designer' }];
  const intro =
    user?.intro ||
    'A kiddo who uses Bootstrap and Laravel in web development. Currently playing around with design via Figma. Currently playing around ...';

  return (
    <li
      className={`flex h-40 w-full animate-fadeInUp flex-col justify-between rounded-3xl pb-6 pl-5 pr-4 pt-4 ${participantRole === 'HOST' ? 'bg-blue-B70' : 'border-[1.5px] border-solid border-white/20 bg-white/30'}`}
    >
      <header className="flex w-full">
        <div className="grid w-full grid-cols-[1fr_auto]">
          <div className="mt-3 grid grid-cols-[auto_1fr] gap-[10px]">
            <div
              className={`relative flex size-12 flex-shrink-0 items-center justify-center rounded-full ${participantRole === 'HOST' ? 'mb-3 border-[4px] border-solid border-yellow-primary bg-white fill-gray-B40' : 'bg-gray-B35/40 fill-white'}`}
            >
              {user?.profileImageUrl ? (
                <div className="absolute left-0 top-0 size-full overflow-hidden rounded-full">
                  <Image
                    src={user.profileImageUrl}
                    alt={`${name} profile`}
                    fill
                    sizes="48px"
                  />
                </div>
              ) : (
                <DefaultProfileSVG />
              )}
              {participantRole === 'HOST' && (
                <span className="absolute -bottom-4 rounded-full bg-yellow-primary px-2 py-1 text-[10px] font-black text-black">
                  HOST
                </span>
              )}
            </div>
            <dl className="flex w-full min-w-0 flex-col justify-center">
              <dt className="truncate text-lg font-bold">{name}</dt>
              <dd className="truncate text-xs text-white/60">
                {jobs.map((job) => job.name).join(', ')}
              </dd>
            </dl>
          </div>
          <div className="flex gap-[6px]">
            <WishlistButton
              id={user?.id}
              participantRole={participantRole}
              isWishlisted={isWishlisted}
            />
            <SocialContainer
              participantRole={participantRole}
              email={user?.email}
              socialList={user?.socialMedia ?? []}
            />
          </div>
        </div>
      </header>
      <p className="line-clamp-2 text-xs">{intro}</p>
    </li>
  );
}

export default ParticipantCard;