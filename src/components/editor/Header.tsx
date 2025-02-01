import { ContactInfo } from '@/types';

interface HeaderProps {
  name: string;
  contact: ContactInfo;
  onNameChange?: (name: string) => void;
  onContactChange?: (field: keyof ContactInfo, value: string) => void;
  isEditable?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ name, contact, onNameChange, onContactChange }) => (
  <header id="driverHeader1" className="text-center mb-4">
    <h1
      onBlur={(e) => onNameChange?.(e.target.textContent || name)}
      contentEditable
      suppressContentEditableWarning
      className="text-4xl font-serif mb-2"
    >
      {name}
    </h1>

    <div className="flex items-center justify-center gap-2 text-base">
      <div
        onBlur={(e) => onContactChange?.('email', e.target.textContent || contact.email)}
        contentEditable
        suppressContentEditableWarning
        className="underline"
      >
        {contact.email}
      </div>

      <span>|</span>

      <span
        id="driverHeader2"
        onBlur={(e) => onContactChange?.('phone', e.target.textContent || contact.phone)}
        contentEditable
        suppressContentEditableWarning
      >
        {contact.phone}
      </span>

      <span>|</span>

      <div
        onBlur={(e) => onContactChange?.('linkedin', e.target.textContent || contact.linkedin)}
        className="underline"
        contentEditable
        suppressContentEditableWarning
      >
        {contact.linkedin}
      </div>

      <span>|</span>

      <div
        className="underline"
        onBlur={(e) => onContactChange?.('github', e.target.textContent || contact.github)}
        contentEditable
        suppressContentEditableWarning
      >
        {contact.github}
      </div>
    </div>

    <div
      className="underline"
      onBlur={(e) => onContactChange?.('website', e.target.textContent || contact.website)}
      contentEditable
      suppressContentEditableWarning
    >
      {contact.website}
    </div>
  </header>
);
