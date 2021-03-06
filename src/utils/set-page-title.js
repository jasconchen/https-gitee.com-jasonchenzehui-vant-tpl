import defaultSettings from '@/settings'

const title = defaultSettings.title || 'vant tpl'

export default function setPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
