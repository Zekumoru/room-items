import { OutlineIconProps } from './icon.types';

const ChevronUp = ({ className, strokeWidth }: OutlineIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth ?? 1.5}
      stroke="currentColor"
      className={className ?? 'w-6 h-6'}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  );
};

export default ChevronUp;
