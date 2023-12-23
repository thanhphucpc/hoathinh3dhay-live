

import Logo from 'components/Logo';
import SectionHeading from './SectionHeading';
import MenuItem from './MenuItem';
import MenuItemLink from './MenuItemLink';
import LINKS from 'utils/constants/links';


const menuList = [
  {
    name: "Trang chủ",
    path: "/"
  },
  {
    name: "Hoạt hình 3D TQ",
    path: "/hoat-hinh-3d"
  }
  // {
  //   name: "Anime",
  //   path: "hoat-hinh-anime"
  // }
]

const topMovies = [
  {
    name: "Thế giới hoàn mỹ",
    path: "/hoat-hinh-3d/the-gioi-hoan-my"
  },
  {
    name: "Thương nguyên đồ",
    path: "/hoat-hinh-3d/thuong-nguyen-do"
  },
  {
    name: "Đấu phá thương khung phần 5",
    path: "/hoat-hinh-3d/dau-pha-thuong-khung-phan-5"
  },
  {
    name: "Vũ động càn khôn phần 4",
    path: "/hoat-hinh-3d/vu-dong-can-khon-phan-4"
  },
  {
    name: "Phàm nhân tu tiên phần 3",
    path: "/hoat-hinh-3d/pham-nhan-tu-tien-phan-3"
  },
]

const renderStaticCategories = (closeMenu = null) => {
  const menuItemLinks = topMovies.map(elem => (
    <MenuItemLink
    key={Math.random() * 100}
    href={{
      pathname: elem.path,
    }}
    onClick={closeMenu}
  >
    <MenuItem title={elem.name} />
  </MenuItemLink>
  ));

  return menuItemLinks;
};

const renderGenres = (closeMenu = null) => {
  const menuItemLinks = menuList.map(genre => (
    <MenuItemLink
      key={Math.random() * 100}
      href={{
        pathname: genre.path,
      }}
      onClick={closeMenu}
    >
      <MenuItem title={genre.name} />
    </MenuItemLink>
  ));

  return menuItemLinks;
};

const Menu = ({
  isMobile,
  closeMenu,
  ...rest
}) => {

  return (
    <>
      <nav {...rest}>
        {!isMobile && <Logo />}
       
        <SectionHeading>Danh mục</SectionHeading>
        {renderGenres(closeMenu)}
         <SectionHeading>Top phim hay</SectionHeading>
        {renderStaticCategories(closeMenu)}
        {/* <TMDBMark className='tmdb-mark' /> */}
      </nav>
      <style jsx>{`
        :global(.copyright) {
          display: flex;
          justify-content: center;
          margin: 24px 8px;
        }

        :global(.tmdb-mark) {
          margin: 16px 8px;
        }
      `}</style>
    </>
  );
};

export default Menu;
