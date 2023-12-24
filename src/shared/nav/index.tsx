import Link from "next/link";

const pages = [
    {
        label: "Início",
        url: "/",
    },
    {
        label: "Funcionalidades",
        url: "/funcionalidades",
    },
    {
        label: "Preço",
        url: "/preco",
    },
    {
        label: "Contato",
        url: "/contato",
    },
];

export default function Nav() {
    return (
        <nav>
            {pages.map(({ label, url }, idx) => {
                return (
                    <Link href={url} key={label + idx}>
                        {label}
                    </Link>
                );
            })}
        </nav>
    );
}
