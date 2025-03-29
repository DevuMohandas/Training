import ImageAnimationCard from '../atoms/ImageAnimationCard';
import TemplatesSection from '../organisms/TemplatesSection';
import TemplatemodeTemplate from '../template/TemplatemodeTemplate';

const EnvogueTemplatemode = () => {
  return (
    <TemplatemodeTemplate
      animationCard={<ImageAnimationCard src="/assets/images/animation-card-image.svg" variant="templatepage" />}
      templateSection={<TemplatesSection />}
    />
  );
};

export default EnvogueTemplatemode;
