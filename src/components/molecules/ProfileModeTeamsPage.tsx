import Image from 'next/image';
import { ICONS } from '../../constants/EnvogueaiConstants';
import CustomButton from '../atoms/CustomButton';

const ProfileModeTeamsPage = () => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center h-full">
      <div className="flex flex-col">
        <div className="w-full flex justify-center"><Image src="/assets/icons/teams-logo.svg" width={151} height={151} alt="icon" /></div>
        <div className="flex flex-col text-primary text-center">
          <div>You're not a member of a team yet.</div>
          <div>
            Start a new team to
            <span className="bg-gradient-to-r from-[#61A6F2] via-[#C9649A] to-[#F28E4C] bg-clip-text text-transparent"> collaborate and create </span>
            with your teammates.
          </div>
        </div>
        <div className="w-full flex justify-center mt-space-10"><CustomButton variant="primary" text="Upgrade" icon={ICONS.UPGRADE_LOGO} className="w-[8.5rem]" /></div>
      </div>
    </div>
  );
};

export default ProfileModeTeamsPage;
