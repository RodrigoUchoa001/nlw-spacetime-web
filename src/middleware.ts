import { NextRequest, NextResponse } from "next/server";

const signInURL = `https:github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`;

export function middleware(req: NextRequest){
    const token = req.cookies.get('token')?.value;

    if (!token){
        return NextResponse.redirect(signInURL, {
            headers: {
                'Set-Cookie': `redirectTo=${req.url}; Path=/; HttpOnly; max-age=20;` //o req.url contém o link q o usuario estava tentando entrar antes de cair no middleware
            },
        });
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: '/memories/:path*', //quais endereços da aplicação o middleware deve agir
    // as rotas selecionadas são todas a partir de /memories/
}
