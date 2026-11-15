/** Which archive the Publications page shows: Yoga Sudha editions or research papers. */
export type ArchiveKind = "yoga-sudha" | "research";

export const OPEN_ARCHIVE_EVENT = "publications:open-archive";

/** Switch the archive section to `kind` and scroll it into view. */
export function openArchive(kind: ArchiveKind) {
  window.dispatchEvent(new CustomEvent<ArchiveKind>(OPEN_ARCHIVE_EVENT, { detail: kind }));
  // Let the menu finish closing before scrolling, so nothing interrupts the smooth scroll.
  window.setTimeout(() => {
    document.getElementById("archives")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 80);
}
