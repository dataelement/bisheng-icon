import { forwardRef } from 'react';
import type { IconProps } from '../types';

const PlaySpeed = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      color={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C4.00035 5.85752 3.26375 6.95991 2.7612 8.17317C2.25866 9.38642 2 10.6868 2 12C2 13.3132 2.25866 14.6136 2.7612 15.8268C3.26375 17.0401 4.00035 18.1425 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22" stroke="currentColor" strokeLinecap="round"/>
<path d="M12 22C13.7562 22 15.4815 21.5375 17.0022 20.659C18.5229 19.7805 19.7854 18.517 20.6628 16.9957C21.5401 15.4743 22.0013 13.7487 22 11.9925C21.9987 10.2363 21.5349 8.51137 20.6552 6.99132C19.7756 5.47127 18.5112 4.20969 16.9891 3.33349C15.4671 2.45728 13.7412 1.99737 11.985 2.00001C10.2287 2.00265 8.5042 2.46776 6.98481 3.34853C5.46543 4.22931 4.20479 5.49469 3.32974 7.01738" stroke="currentColor" strokeLinecap="round" strokeDasharray="1.5 5"/>
<path d="M9.6377 12V9.57165C9.6377 8.80185 10.471 8.32072 11.1377 8.70562L13.2407 9.91981L15.3437 11.134C16.0104 11.5189 16.0104 12.4811 15.3437 12.866L13.2407 14.0802L11.1377 15.2944C10.471 15.6793 9.6377 15.1982 9.6377 14.4284V12Z" stroke="currentColor" strokeLinejoin="round"/>
    </svg>
  )
);

PlaySpeed.displayName = 'PlaySpeed';
export default PlaySpeed;
