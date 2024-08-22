export function genDownloadUrl(filename: string) {
    return `${import.meta.env.VITE_APP_BASE_URL}/download/${filename}`
}

export function genDownloadAssetUrl(filename: string) {
    return `${import.meta.env.VITE_APP_BASE_URL}/download_asset/${filename}`
}