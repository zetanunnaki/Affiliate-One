interface ReadingTimeProps {
  minutes: number;
}

export default function ReadingTime({ minutes }: ReadingTimeProps) {
  return (
    <span className="text-xs text-zinc-500">
      {minutes} min read
    </span>
  );
}
