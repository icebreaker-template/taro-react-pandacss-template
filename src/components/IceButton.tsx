import { cva, cx } from "styled-system/css";
import { Button } from "@tarojs/components";
import type { PropsWithChildren } from "react";
import type { RecipeVariantProps } from "styled-system/css";

export const buttonCss = cva({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  variants: {
    visual: {
      solid: { bg: "red.200", color: "white" },
      outline: { borderWidth: "1px", borderColor: "red.200" },
    },
    size: {
      sm: { padding: "2", fontSize: "20px" },
      lg: { padding: "4", fontSize: "24px" },
    },
  },
  defaultVariants: {
    size: "sm",
    visual: "solid",
  },
});

type StyleProps = RecipeVariantProps<typeof buttonCss>;

export type IceButtonProps = StyleProps & { customClass?: string };

export const IceButton = (props: PropsWithChildren<IceButtonProps>) => {
  const { customClass, children, size, visual } = props;
  return (
    <Button
      className={cx(
        customClass,
        buttonCss({
          size,
          visual,
        })
      )}
    >
      {children}
    </Button>
  );
};
