import Nav from "../nav";

export default function Header() {
    return (
        <header>
            <div>
                <h2>Basix FLOW</h2>
            </div>
            <Nav />
            <label>
                Procurar
                <input type="text" placeholder="Procurar" />
            </label>
        </header>
    );
}
