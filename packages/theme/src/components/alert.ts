import type { ComponentMultiStyle } from "@yamada-ui/core"
import { shadeColor, tintColor } from "@yamada-ui/utils"

export const Alert: ComponentMultiStyle = {
  baseStyle: {
    container: {
      px: 4,
      py: 3,
      rounded: "md",
    },
    icon: {
      flexShrink: 0,
      marginEnd: 3,
      boxSize: 5,
    },
    loading: {
      flexShrink: 0,
      marginEnd: 3,
      fontSize: "xl",
    },
    title: {
      marginEnd: 2,
      fontWeight: "bold",
      lineHeight: 5,
    },
    description: {
      lineHeight: 5,
    },
  },

  variants: {
    basic: ({ theme: t, colorMode: m, colorScheme: c = "primary" }) => ({
      container: { bg: ["white", "black"], borderWidth: "1px" },
      icon: { color: [tintColor(`${c}.600`, 16)(t, m), `${c}.400`] },
    }),
    subtle: ({ theme: t, colorMode: m, colorScheme: c = "primary" }) => ({
      container: { bg: [`${c}.100`, shadeColor(`${c}.300`, 58)(t, m)] },
      icon: { color: [tintColor(`${c}.600`, 16)(t, m), `${c}.400`] },
    }),
    solid: ({ theme: t, colorMode: m, colorScheme: c = "primary" }) => ({
      container: {
        bg: [tintColor(`${c}.600`, 16)(t, m), shadeColor(`${c}.600`, 16)(t, m)],
        color: "white",
      },
    }),
    "island-accent": ({
      theme: t,
      colorMode: m,
      colorScheme: c = "primary",
    }) => ({
      container: {
        bg: ["white", "black"],
        borderWidth: "1px",
        pl: 7,
        _before: {
          content: '""',
          position: "absolute",
          top: "50%",
          left: 3,
          transform: "translateY(-50%)",
          w: 1,
          h: "calc(100% - 1.5rem)",
          bg: [tintColor(`${c}.600`, 16)(t, m), `${c}.400`],
          rounded: "full",
        },
      },
      icon: { color: [tintColor(`${c}.600`, 16)(t, m), `${c}.400`] },
    }),
    "left-accent": ({
      theme: t,
      colorMode: m,
      colorScheme: c = "primary",
    }) => ({
      container: {
        bg: [`${c}.100`, shadeColor(`${c}.300`, 58)(t, m)],
        pl: 3,
        borderLeft: "0.25rem solid",
        borderLeftColor: [tintColor(`${c}.600`, 16)(t, m), `${c}.400`],
        rounded: 4,
      },
      icon: { color: [tintColor(`${c}.600`, 16)(t, m), `${c}.400`] },
    }),
    "top-accent": ({ theme: t, colorMode: m, colorScheme: c = "primary" }) => ({
      container: {
        bg: [`${c}.100`, shadeColor(`${c}.300`, 58)(t, m)],
        pt: 3,
        borderTop: "0.25rem solid",
        borderTopColor: [tintColor(`${c}.600`, 16)(t, m), `${c}.400`],
        rounded: 4,
      },
      icon: { color: [tintColor(`${c}.600`, 16)(t, m), `${c}.400`] },
    }),
  },

  defaultProps: {
    variant: "basic",
    colorScheme: "primary",
  },
}
