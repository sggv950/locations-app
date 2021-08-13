import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import './header.scss';

export const Header = () => {
  return (
    <header className='app-header'>
      <h1>header</h1>
      <FontAwesomeIcon icon={faCodeBranch} size="lg" />
    </header>
  );
};
