export enum EButtonType {
  PRIMARY = 'PRIMARY',
  PRIMARY_INVERTED = 'PRIMARY_INVERTED',
  SUCCESS = 'SUCCESS',
  DISABLED = 'DISABLED',
  OUTLINE = 'OUTLINE',
  SECONDARY = 'SECONDARY',
}

export interface IButton {
  title: string;
  onClick: () => void;
  type?: EButtonType;
}

/**
 * A button component that can be used for any purpose
 *
 * @param {string} children           - Title       - The title of the button
 * @param {function} onClick          - Required    - The function to be called when the button is clicked
 * @param {ButtonType} type           - Optional    - The type of button to be displayed, default is PRIMARY
 *
 * @author Nathan
 * @date 12-09-2022
 * @version 1
 */
export function Button({ title, onClick, type = EButtonType.PRIMARY, ...rest }: IButton): JSX.Element {
  return (
    <button
      data-testid='button'
      className={`btn border p-1 flex justify-center items-center w-full rounded-full font-bold transition duration-500 transform ${getButtonTypeClassName(
        type
      )}`}
      onClick={onClick}
      disabled={type === EButtonType.DISABLED}
      {...rest}
    >
      {title}
    </button>
  );
}

export function getButtonTypeClassName(type: EButtonType): string {
  switch (type) {
    case EButtonType.SUCCESS:
      return 'px-2 text-white bg-green';
    case EButtonType.PRIMARY:
      return 'bg-primary hover:bg-primaryHover text-white font-bold py-2 px-4 rounded h-full focus:bg-primaryFocus';
    case EButtonType.PRIMARY_INVERTED:
      return 'h-full bg-primary border-primary  text-white px-4 hover:text-primary hover:bg-white focus:text-primaryFocus focus:border-primaryFocus';
    case EButtonType.DISABLED:
      return 'bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded h-full hover:cursor-auto';
    case EButtonType.OUTLINE:
      return 'bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded';
    case EButtonType.SECONDARY:
      return 'bg-secondary hover:bg-secondaryHover text-white font-bold py-2 px-4 rounded h-full focus:bg-secondaryFocus';
    default:
      return '';
  }
}
