
import SummarySectionHeading from 'parts/SummarySectionHeading';
import withTheme from 'utils/hocs/withTheme';

const TextSection = ({
  theme,
  className,
  heading,
  text
}) => (
  <>
    <div className={className}>
      <SummarySectionHeading>{heading}</SummarySectionHeading>
      <p className='text' dangerouslySetInnerHTML={{__html: text.replace('<strong>',"").replace('</strong>',"")}} ></p>
    </div>
    <style jsx>{`
      .text {
        color: var(--palette-text-secondary);
        font-size: 1.5rem;
        font-weight: ${theme.typography.fontWeightMedium};
        line-height: 1.8;
        text-align: justify;
      }
    `}</style>
  </>
);

export default withTheme(TextSection);
