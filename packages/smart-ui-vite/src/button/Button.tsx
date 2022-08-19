import { defineComponent, PropType } from "vue";
import "uno.css";

export type ISize = "small" | "medium" | "large";
export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";
export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue", // 设定默认颜色
  },
  plain: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },
  icon: {
    type: String,
    default: "",
  },
  round: {
    type: Boolean,
    default: false,
  },
} as const;
export default defineComponent({
  name: "MyButton",
  props,
  setup(props, { slots }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm",
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base",
      },
      large: {
        x: "4",
        y: "2",
        text: "lg",
      },
    };

    return () => (
      <button
        class={`py-${size[props.size].y}
      px-${size[props.size].x}
      ${props.round ? "rounded-full" : "rounded-lg"}
      font-semibold
      rounded-lg 
      shadow-md 
      hover:text-white
      text-${props.plain ? props.color + "-500" : "white-500"}
      bg-${props.color}-${props.plain ? "100" : "500"} 
      hover:bg-${props.color}-700 
      border-${props.color}-${props.plain ? "100" : "500"} 
      cursor-pointer`}
      >
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-3`}></i>
        ) : (
          ""
        )}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
