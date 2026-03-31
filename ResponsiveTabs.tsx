import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

interface ResponsiveTabsProps extends React.ComponentProps<typeof TabsPrimitive.Root> {
  children: React.ReactNode;
}

export function ResponsiveTabs({ className, ...props }: ResponsiveTabsProps) {
  return (
    <TabsPrimitive.Root
      className={cn("flex flex-col gap-2 w-full", className)}
      {...props}
    />
  );
}

interface ResponsiveTabsListProps extends React.ComponentProps<typeof TabsPrimitive.List> {
  children: React.ReactNode;
}

export function ResponsiveTabsList({ className, children, ...props }: ResponsiveTabsListProps) {
  return (
    <TabsPrimitive.List
      className={cn(
        "inline-flex w-full items-center justify-start gap-1 sm:gap-2 bg-white/50 backdrop-blur-sm border border-orange-200 rounded-lg p-1 sm:p-2 overflow-x-auto",
        className
      )}
      {...props}
    >
      {children}
    </TabsPrimitive.List>
  );
}

interface ResponsiveTabsTriggerProps extends React.ComponentProps<typeof TabsPrimitive.Trigger> {
  children: React.ReactNode;
}

export function ResponsiveTabsTrigger({ className, children, ...props }: ResponsiveTabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "flex-1 sm:flex-none px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-md transition-all whitespace-nowrap",
        "data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:text-gray-800",
        "data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-md",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500",
        className
      )}
      {...props}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
}

interface ResponsiveTabsContentProps extends React.ComponentProps<typeof TabsPrimitive.Content> {
  children: React.ReactNode;
}

export function ResponsiveTabsContent({ className, children, ...props }: ResponsiveTabsContentProps) {
  return (
    <TabsPrimitive.Content
      className={cn(
        "mt-4 sm:mt-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500",
        className
      )}
      {...props}
    >
      {children}
    </TabsPrimitive.Content>
  );
}
