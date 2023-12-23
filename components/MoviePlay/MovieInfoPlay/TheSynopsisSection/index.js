
import TextSection from 'parts/TextSection';

const TheSynopsisSection = ({
  className,
  synopsis,
  movieName
}) => (
  <TextSection
    className={className}
    heading={movieName}
    text={synopsis} />
);

export default TheSynopsisSection;
