import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            <h1>Você se perdeu e caiu na página 404 :O</h1>
            <Link href={"/"}>
                Ir para a home
            </Link>
        </div>
    )
}