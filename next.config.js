/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'avatars.githubusercontent.com', //dizendo pro next quais dominios eu permito q ele carrege imgs, no caso, o site dos profile pics dos usuarios
        ]
    }
}

module.exports = nextConfig
