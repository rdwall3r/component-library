import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

const Popover: React.FC = () => (
  <PopoverPrimitive.Root>
    <PopoverPrimitive.Trigger>More info</PopoverPrimitive.Trigger>
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content>
        Some more info...
        <PopoverPrimitive.Arrow />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  </PopoverPrimitive.Root>
);

export default Popover;