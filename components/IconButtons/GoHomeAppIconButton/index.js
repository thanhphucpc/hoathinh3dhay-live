
import IconButtonBase from 'components/UI/IconButtonBase';
import HomeIcon from 'public/assets/svgs/icons/home.svg';


const GoHomeAppIconButton = props => (
  // eslint-disable-next-line @next/next/no-html-link-for-pages
  <a href='/'>
    <IconButtonBase {...props}>
      <HomeIcon
        fill='currentColor'
        width='2.125em' />
    </IconButtonBase>
  </a>


);

export default GoHomeAppIconButton;
