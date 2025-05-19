import { useState } from "react";

export function useDropdown(
    initialState: boolean = false,
    triggerType: 'hover' | 'click' = 'hover'
) {
    const [isOpen, setIsOpen] = useState(initialState);

    const handlers = triggerType === 'hover'
        ?
        {
            onMouseEnter: () => setIsOpen(true),
            onMouseLeave: () => setIsOpen(false)
        }
        :
        {
            onclick: () => setIsOpen(!isOpen)
        };

    return {
        isOpen,
        setIsOpen,
        handlers,
        close: () => setIsOpen(false),
        open: () => setIsOpen(true),
        toggle: () => setIsOpen(!isOpen)
    };
}