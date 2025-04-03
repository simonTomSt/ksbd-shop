import { Checkbox, CheckboxProps } from '@heroui/checkbox';
import { useState } from 'react';

type Props = CheckboxProps;

export const PrivacyPolicyCheckbox = ({ children, ...props }: Props) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="flex gap-1">
      <Checkbox
        {...props}
        isSelected={isSelected}
        onSelect={() => setIsSelected(!isSelected)}
        onValueChange={setIsSelected}
      />
      <button className="text-xs" onClick={() => setIsSelected(!isSelected)}>
        {children}
      </button>
    </div>
  );
};
