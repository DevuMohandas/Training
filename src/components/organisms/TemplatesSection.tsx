import { Templates } from '@/constants/EnvogueaiConstants';
import TemplateCard from '../molecules/TemplateCard';

const TemplatesSection = () => {
  return (
    <div className="columns-2 new-md:columns-3 new-lg:columns-4 gap-4">
      {Templates.map(template => (
        <div key={template.id} className="mb-space-04 w-fit">
          <TemplateCard sketchSrc={template.sketchSrc} colorSrc={template.colorSrc} />
        </div>
      ))}
    </div>
  );
};

export default TemplatesSection;

// className={index % 2 === 0 ? 'row-span-1' : 'row-span-2'}
