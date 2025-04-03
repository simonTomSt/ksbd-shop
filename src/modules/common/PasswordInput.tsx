import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { Input, type InputProps } from '@heroui/input';
import { forwardRef, useState } from 'react';

type Props = InputProps;

export const PasswordInput = forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
      <Input
        {...props}
        ref={ref}
        endContent={
          <button
            aria-label="toggle password visibility"
            className="focus:outline-none text-2xl block w-5 h-5"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? <EyeSlashIcon /> : <EyeIcon />}
          </button>
        }
        type={isVisible ? 'text' : 'password'}
      />
    );
  },
);

PasswordInput.displayName = 'PasswordInput';
