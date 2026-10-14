import { css } from "../styled-system/css";
import { Box } from "../styled-system/jsx";
import { token } from "../styled-system/tokens";

export const jsCall = token("colors.ghost");
export const docsExample = css({ color: "red.1000" });
export const whole = css({ color: "{colors.ghost}" });
export const embedded = css({ border: "1px solid {colors.ghost}" });
export const cssFn = css({ margin: "token(spacing.ghost)" });
export const spacing = css({ p: "{spacing.ghost}" });
export const jsx = () => <Box color="{colors.ghost}" />;
export const valid = css({ color: "{colors.red.500}", border: "1px solid {colors.red.500}" });
export const fallback = css({ margin: "token(spacing.ghost, 4px)" });
