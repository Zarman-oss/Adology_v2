import { ReactNode } from 'react';

export default function NavigationButton({
  icon,
  onClick,
  disabled = false,
}: {
  icon: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`p-2 rounded-full flex justify-center items-center cursor-pointer transition
        ${
          disabled
            ? 'bg-neutral-700 cursor-not-allowed opacity-50'
            : 'bg-neutral-800 hover:bg-neutral-700'
        }`}
    >
      {icon}
    </button>
  );
}
