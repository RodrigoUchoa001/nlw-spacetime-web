import { api } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get('code') ;

    const redirectTo = req.cookies.get('redirectTo')?.value;

    const registerResponse = await api.post('/register', {
        code,
    });

    const { token } = registerResponse.data;

    const redirectURL = redirectTo ?? new URL('/', req.url); //se houver um redirectTo (ver middleware pra entender), envia pra ele, se n, vai pra home

    const cookieExpiresInSeconds = 60 * 60 * 24 * 30; //um mês

    return NextResponse.redirect(redirectURL, {
        headers: {
            'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds}` //adicionado o token aos cookies
            // token: o nome do cookie
            // Path: o rota em q o cookie vai estar disponivel, se fosse "/auth", 
            // só nas rotas depois de /auth o cookie existiria, do jeito q está, tá disponivel
            // em toda a aplicação
            // max-age: tempo q o cookie estará disponivel
        },
    });
}