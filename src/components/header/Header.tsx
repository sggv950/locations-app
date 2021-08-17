import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import './header.scss';

export const Header = () => {
  return (
    <header className='app-header'>
      <h2>Locations App</h2>
      <a href='https://github.com/sggv950/wix-editor-locations-app' target="_blank">
        <FontAwesomeIcon icon={faCodeBranch} size='lg' />
      </a>
    </header>
  );
};
