export function isMobileDevice(): boolean {
  const regex =
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  return regex.test(navigator.userAgent)
}

export const UrlSetSite = (key: string) => {
  const currentUrl = new URL(window.location.href)
  const searchParams = new URLSearchParams(currentUrl.search)
  searchParams.set('site', key)
  currentUrl.search = searchParams.toString()
  window.history.pushState({}, '', currentUrl)
}
