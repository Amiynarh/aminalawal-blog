import { readFile } from 'node:fs/promises'
import path from 'node:path'
import type { APIRoute } from 'astro'

const faviconPath = path.resolve('src/images/favicon.ico')

export const GET: APIRoute = async () => {
    const ico = await readFile(faviconPath)
    return new Response(ico, {
        headers: { 'Content-Type': 'image/x-icon' },
    })
}
