import FileUploadElement from '../atoms/FileUploadElement';
import Avatar from './Avatar';

type AvatarBlockProps = {
  setImage: (image: string) => void;
};

const AvatarBlock = ({ setImage }: AvatarBlockProps) => {
  return (
    <div className="flex flex-col justify-center flex-1 max-h-[9.31rem] shrink">
      <div className="flex gap-space-08 items-center">
        <div className="w-[4.25rem] h-[4.25rem]"><Avatar /></div>
        <div className="flex flex-col gap-[14px]">
          <div className="text-primary font-system-bold text-[1rem]">Avatar</div>
          <div className="w-[10.06rem]"><FileUploadElement setUploadedImage={setImage} variant="secondary" label="Upload New Picture" /></div>
        </div>
      </div>
    </div>
  );
};

export default AvatarBlock;
