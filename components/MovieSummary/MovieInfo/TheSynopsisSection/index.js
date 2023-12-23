
import TextSection from 'parts/TextSection';

const TheSynopsisSection = ({
  className,
  synopsis
}) => (
  <TextSection
    className={className}
    heading='Nội dung'
    text={synopsis} />
);

export default TheSynopsisSection;
