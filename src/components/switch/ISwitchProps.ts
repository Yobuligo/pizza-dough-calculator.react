export interface ISwitchProps {
  onChange: (checked: boolean) => void;
  checked?: boolean;
  /** The width of the switch in e.g. rem, px. */
  width?: string;
  /** The color of the switch in "on" state */
  switchColorOn?: string;
  /** The color of the switch in "off" state */
  switchColorOff?: string;
  /** The slider color */
  sliderColor?: string;
  /**
   * To override the width and colors in css, the following constants are available:
   *   --switchWidth (same as @param{width})
   *   --switchColorOff
   *   --switchColorOn
   *   --sliderColor
   */
  className?: string;
}
