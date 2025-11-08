
export const KeyEnum = {
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown',
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight',
  Enter: 'Enter',
  Space: ' ',
  Tab: 'Tab',
  Shift: "Shift",
  Control: "Control",
  Meta: "Meta",
} as const;

export class HotKeysConfig {
  static readonly TOP_MENU = '1';
  static readonly DETAILS = KeyEnum.ArrowDown;
  static readonly NEXT_GAME = KeyEnum.ArrowRight;
  static readonly PREV_GAME = KeyEnum.ArrowLeft;
}