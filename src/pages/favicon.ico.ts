import { readFile } from 'node:fs/promises'
import path from 'node:path'
import type { APIRoute } from 'astro'

const faviconPath = path.resolve('src/images/favicon_icon.svg')

export const GET: APIRoute = async () => {
    const svg = await readFile(faviconPath)
    return new Response(svg, {
        headers: { 'Content-Type': 'image/svg+xml' },
    })
}
