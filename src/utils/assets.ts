export function resolvePublicAsset(src?: string): string | undefined {
  if (!src) return undefined;
  if (
    src.startsWith('http://') ||
    src.startsWith('https://') ||
    src.startsWith('data:') ||
    src.startsWith('//')
  ) {
    return src;
  }

  const base = import.meta.env.BASE_URL || '/';
  if (src.startsWith('/')) {
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    return `${cleanBase}${src}`;
  }
  return src;
}
