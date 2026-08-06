import "@material-tailwind/react";

type EventCaptureFix = {
  placeholder?: unknown;
  onPointerEnterCapture?: (e: React.PointerEvent<any>) => void;
  onPointerLeaveCapture?: (e: React.PointerEvent<any>) => void;
  crossOrigin?: any;
};

declare module "@material-tailwind/react" {
  export interface TypographyProps extends EventCaptureFix { }
  export interface ButtonProps extends EventCaptureFix { }
  export interface CardProps extends EventCaptureFix { }
  export interface CardHeaderProps extends EventCaptureFix { }
  export interface CardBodyProps extends EventCaptureFix { }
  export interface CardFooterProps extends EventCaptureFix { }
  export interface CarouselProps extends EventCaptureFix { }
  export interface NavbarProps extends EventCaptureFix { }
  export interface InputProps extends EventCaptureFix { }
  export interface SelectProps extends EventCaptureFix { }
  export interface IconButtonProps extends EventCaptureFix { }
}