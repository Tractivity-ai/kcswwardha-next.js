import type { CSSProperties } from 'react';

export type IconName =
  | 'arr' | 'down' | 'menu' | 'close' | 'wa' | 'phone' | 'mail' | 'pin' | 'doc' | 'plus'
  | 'check' | 'nss' | 'place' | 'research' | 'search';

/** One line icon set, one stroke weight. Symbols live in <Sprite /> once per page. */
export function Icon({ name, className = '', style }: { name: IconName; className?: string; style?: CSSProperties }) {
  return (
    <svg className={`i${className ? ' ' + className : ''}`} style={style} aria-hidden="true" focusable="false">
      <use href={`#i-${name}`} />
    </svg>
  );
}

export const Arrow = () => <Icon name="arr" className="arr" />;

export function Wheel({ className = '' }: { className?: string }) {
  return (
    <svg className={`wheel spin ${className}`} aria-hidden="true" viewBox="0 0 200 200">
      <use href="#i-wheel" />
    </svg>
  );
}

export function Sprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <symbol id="i-arr" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.25" /><path d="M10.5 8.5 14 12l-3.5 3.5" /></symbol>
        <symbol id="i-down" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></symbol>
        <symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 8h16M4 16h10" /></symbol>
        <symbol id="i-close" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" /></symbol>
        <symbol id="i-wa" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></symbol>
        <symbol id="i-phone" viewBox="0 0 24 24"><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5L16 13l4 1.5v3a2 2 0 0 1-2 2A14 14 0 0 1 4.5 6a2 2 0 0 1 2-2z" /></symbol>
        <symbol id="i-mail" viewBox="0 0 24 24"><path d="M4 6h16v12H4zM4 7l8 6 8-6" /></symbol>
        <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s6-5.5 6-11a6 6 0 0 0-12 0c0 5.5 6 11 6 11zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></symbol>
        <symbol id="i-doc" viewBox="0 0 24 24"><path d="M7 3h7l4 4v14H7zM14 3v4h4M10 12h5M10 16h5" /></symbol>
        <symbol id="i-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></symbol>
        <symbol id="i-check" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M7.5 12.5l3 3 6-7" /></symbol>
        <symbol id="i-nss" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="2" /><path d="M12 4v6M12 14v6M4 12h6M14 12h6M6.3 6.3l4.2 4.2M13.5 13.5l4.2 4.2M17.7 6.3l-4.2 4.2M10.5 13.5l-4.2 4.2" /></symbol>
        <symbol id="i-place" viewBox="0 0 24 24"><path d="M4 20h4v-4h4v-4h4V8h4" /><path d="M16 4h4v4" /></symbol>
        <symbol id="i-research" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" /><path d="M15 15l5 5M8 10.5h5" /></symbol>
        <symbol id="i-search" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6" /><path d="M15 15l5 5" /></symbol>
        <symbol id="i-wheel" viewBox="0 0 200 200">
          <g fill="none" stroke="#B8893B" strokeWidth="1">
            <circle cx="100" cy="100" r="92" /><circle cx="100" cy="100" r="70" /><circle cx="100" cy="100" r="10" />
            <path d="M100 10v180M10 100h180M36.4 36.4l127.2 127.2M163.6 36.4L36.4 163.6M55 22l90 156M145 22L55 178M22 55l156 90M22 145l156-90" />
          </g>
        </symbol>
      </defs>
    </svg>
  );
}
