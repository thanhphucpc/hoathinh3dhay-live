

import clsx from 'clsx';
import Tooltip from 'components/UI/Tooltip';

const CLASS_NAME = 'poster-title';

const PosterTitle = ({
  theme,
  overview,
  className,
  children,
  ...rest
}) => (
  <>
    <div className='tooltip-info'>
      <h2
        className={clsx(CLASS_NAME, className)}
        {...rest}>
        {children}
      </h2>
      <Tooltip className='tooltip-position tooltip-show'>{overview}</Tooltip>
    </div>

    <style jsx>{`
      .${CLASS_NAME} {
        text-align: center;
        font-size: 1.5rem;
        font-weight: ${theme.typography.fontWeightRegular};
        color: var(--palette-text-secondary);
        margin-bottom: 1rem;
        line-height: 1.4;
      }

      .tooltip-info {
        display: flex;
        position: relative;
        align-items: center;
        margin-bottom: 0.5rem;
      }

      :global(.tooltip-position) {
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translate(-50%, 0);
      }
      .tooltip-info:hover :global(.tooltip-show) {
        visibility: visible;
      }
    `}</style>
  </>
);

export default PosterTitle;
