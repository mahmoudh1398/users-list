export default function dateFormatter(
  date: string,
  locales?: Intl.LocalesArgument,
  options?: Intl.DateTimeFormatOptions
) {
  const formattedDate = new Date(date).toLocaleString(
    locales || "en",
    options || {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  return formattedDate;
}
