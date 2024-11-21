import { NextResponse } from "next/server";
import { cadastroUsuario, loginUsuario } from "../../../services/saldo";

export async function POST(request: Request) {
  const url = new URL(request.url);
  const path = url.pathname;

  try {
    const body = await request.json();

    if (path.endsWith("cadastro")) {
      const result = await cadastroUsuario(body);
      return NextResponse.json(result);
    } else if (path.endsWith("login")) {
      const result = await loginUsuario(body);
      return NextResponse.json(result);
    }

    return NextResponse.json({ error: "Rota inválida." }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
