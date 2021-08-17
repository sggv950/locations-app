import './menu-button.scss';

export type MenuButtonType = {
  isLocationSearch: boolean;
  onButtonClick: (bool: boolean) => void;
};

export const MenuButton = ({
  isLocationSearch,
  onButtonClick,
}: MenuButtonType) => {
  const handleButtonClick = (bool: boolean) => {
    return onButtonClick(bool);
  };

  return (
    <div className='buttons-container'>
      {isLocationSearch ? (
        <button
          onClick={() => handleButtonClick(false)}
          className='menu-btn close-btn'
        >
          Back
        </button>
      ) : (
        <button
          onClick={() => handleButtonClick(true)}
          className='menu-btn add-location-btn'
        >
          + Add location
        </button>
      )}
    </div>
  );
};
