

// MEMO: inspired by https://web.dev/prefers-color-scheme/#the-lessdark-mode-togglegreater-custom-element
import Head from 'next/head';
import clsx from 'clsx';
import useDarkMode from 'use-dark-mode';

import Toggle from 'components/UI/Toggle';
import CLASS_NAMES from 'utils/constants/class-names';
import withTheme from 'utils/hocs/withTheme';

const DarkModeToggle = ({
  theme,
  id,
  className
}) => {
  const darkMode = useDarkMode(true, {
    classNameDark: CLASS_NAMES.DARK,
    classNameLight: CLASS_NAMES.LIGHT
  });

  return (
    <>
      <Head>
        <>

          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" sizes="16x16" href='/favicon.ico' />

          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />

          {/* TODO: block for now for toggle experience of the favicon depending on the light/dark mode */}
          {/* <link
              rel='icon'
              href='/dark-favicon.ico' /> */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel='shortcut icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          
          <link rel='shortcut icon' type='image/x-icon' sizes='16x16' href='/favicon.ico' />
          <link rel='shortcut icon' type='image/x-icon' sizes='32x32' href='/favicon-32x32.ico' />
          <link rel='shortcut icon' type='image/x-icon' sizes='48x48' href='/favicon-48x48.ico' />

          <link rel='shortcut icon' sizes='16x16' href='/favicon.ico' />
          <link rel='shortcut icon' sizes='32x32' href='/favicon-32x32.ico' />
          <link rel='shortcut icon' sizes='48x48' href='/favicon-48x48.ico' />

          <meta
            name='msapplication-TileColor'
            content='#da532c' />
          {/* TODO: hardcoded */}
          <meta name='theme-color' content='#fafafa' />
        </>
      </Head>
      <div className={clsx('dark-mode-toggle', className)}>
        <button
          type='button'
          onClick={darkMode.disable}>
          ☀
        </button>
        <Toggle
          id={id}
          checked={darkMode.value}
          onChange={darkMode.toggle} />
        <button
          type='button'
          onClick={darkMode.enable}>
          ☾
        </button>
      </div>
      <style jsx>{`
        .dark-mode-toggle {
          display: flex;
        }

        .dark-mode-toggle > button {
          font-size: 2.125rem;
          background: none;
          border: none;
          line-height: 0;
          color: #ffb74d;
          cursor: pointer;
          transition: color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut};
        }

        .dark-mode-toggle > button:last-child {
          color: #666;
        }
    
        .dark-mode-toggle > button:focus {
          outline: none;
        }

        :global(body.dark) .dark-mode-toggle > button {
          color: #999;
        }
        
        :global(body.dark) .dark-mode-toggle > button:last-child {
          color: lightblue;
        }
      `}</style>
    </>
  );
};

export default withTheme(DarkModeToggle);
