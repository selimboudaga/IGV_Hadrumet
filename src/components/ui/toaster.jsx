import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast className={`bg-white border-2  ${title === "Email Sent Successfully !" ? "border-blue": "border-red-700"} `} key={id} {...props}>
            <div className=" ">
              {title && <ToastTitle className ={`text-lg tracking-wide  ${title === "Email Sent Successfully !" ? "text-blue": "text-red-700"} `} >{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className={`${title === "Email Sent Successfully !" ? "hover:text-blue": "hover:text-red-700"} `} />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
