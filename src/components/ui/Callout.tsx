interface CalloutProps {
  type?: "info" | "warning" | "success" | "danger";
  title?: string;
  children: React.ReactNode;
}

const styles = {
  info: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200",
  warning: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200",
  success: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200",
  danger: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200",
};

const icons = {
  info: "i",
  warning: "!",
  success: "\u2713",
  danger: "\u2717",
};

export default function Callout({ type = "info", title, children }: CalloutProps) {
  return (
    <div className={`p-4 border rounded-lg my-4 ${styles[type]}`}>
      <div className="flex items-start gap-3">
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-current/10 text-sm font-bold shrink-0 mt-0.5">
          {icons[type]}
        </span>
        <div>
          {title && <strong className="block mb-1">{title}</strong>}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}
