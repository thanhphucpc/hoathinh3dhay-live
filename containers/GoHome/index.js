
import Link from 'next/link';

import TextButton from 'components/UI/TextButton';
import DropdownMenu, { DropdownMenuItem } from 'components/UI/DropdownMenu';
import AccountCircleIconButton from 'components/IconButtons/AccountCircleIconButton';
import ExitToAppIconButton from 'components/IconButtons/ExitToAppIconButton';
import { useAuth } from 'utils/hocs/AuthProvider';
import LINKS from 'utils/constants/links';
import QUERY_PARAMS from 'utils/constants/query-params';
import COLOR_TYPES from 'utils/constants/color-types';
import GoHomeAppIconButton from 'components/IconButtons/GoHomeAppIconButton';

/**
 * TODO:
 * Should use the avatar.
 */

const GoHome = ({ className, style }) => {


  return (
    <>
      <GoHomeAppIconButton
        aria-label='Về trang chủ'
        color={COLOR_TYPES.SECONDARY}
        className={className}
        style={style}
        onClick={()=>{}} />
    </>
  );
};

export default GoHome;
