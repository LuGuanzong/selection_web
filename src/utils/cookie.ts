export function getCookie(name: string): string | null {
  const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
    const [key, value] = cookie.split('=');
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);

  console.log('name', name)
  console.log('cookies', cookies)

  return cookies[name] || null;
}