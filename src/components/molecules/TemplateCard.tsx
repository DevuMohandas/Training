'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CustomButton from '../atoms/CustomButton';

type TemplateCardProps = {
  sketchSrc: string;
  colorSrc: string;
};

const TemplateCard = ({ sketchSrc, colorSrc }: TemplateCardProps) => {
  const router = useRouter();
  const goToEditPage = () => {
    router.push(`/envogue_editmode?src=${encodeURIComponent(sketchSrc)}`);
  };

  return (
    <div className="relative cursor-pointer group border-[2px] card-border rounded-radius-xl overflow-hidden">
      <Image
        src={sketchSrc}
        alt="Template"
        objectFit="cover"
        width={280}
        height={280}
      />
      <Image
        src={colorSrc}
        alt="Template"
        width={280}
        height={280}
        className="
          absolute top-0 left-0 w-full h-full object-cover transition-all duration-400 ease-in-out
          [clip-path:inset(0_100%_0_0)]
          group-hover:[clip-path:inset(0_0%_0_0)]
        "
      />
      <div className="absolute bottom-4 w-full flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <CustomButton text="Try this Template" variant="primary" onClick={goToEditPage} />
      </div>
    </div>
  );
};

export default TemplateCard;
