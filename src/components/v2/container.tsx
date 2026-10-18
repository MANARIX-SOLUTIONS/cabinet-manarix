import { cn } from "@/lib/utils";

interface V2ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
  id?: string;
}

export function V2Container({
  children,
  className,
  as: Tag = "div",
  id,
}: V2ContainerProps) {
  return (
    <Tag id={id} className={cn("v2-container", className)}>
      {children}
    </Tag>
  );
}
