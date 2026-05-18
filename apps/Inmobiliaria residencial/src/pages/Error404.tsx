
interface Error404Props {
    backgroundImage?: string;
    homeLink?: string;
}

export const Error404 = ({
    backgroundImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
    homeLink = "Welcome"
}: Error404Props) => {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-900">
            {/* Capa de Imagen de Fondo */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
                style={{ backgroundImage: `url('${backgroundImage}')` }}
                aria-hidden="true"
            >
                {/* Overlay para mejorar la legibilidad del texto */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            </div>

            {/* Contenido Principal */}
            <section className="relative z-10 px-6 text-center text-white">
                <header>
                    <h1 className="mb-4 text-9xl font-extrabold tracking-tight lg:text-[12rem]">
                        404
                    </h1>
                    <h2 className="mb-8 text-2xl font-semibold md:text-4xl">
                        Parece que te has perdido en la inmobiliaria.
                    </h2>
                </header>

                <p className="mx-auto mb-10 max-w-lg text-lg text-gray-300">
                    La página que buscas no existe o ha sido movida a otra direccion.
                    No te preocupes, siempre puedes volver al inicio y alquilar con nosotros
                </p>

                <nav>
                    <a
                        href={`/${homeLink}`}
                        className="inline-flex items-center rounded-lg bg-indigo-600 px-8 py-3.5 text-center text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/50 active:scale-95"
                    >
                        Volver al inicio
                    </a>
                </nav>
            </section>

            {/* Decoración sutil (opcional) */}
            <div className="absolute bottom-10 left-10 hidden text-xs text-gray-400 md:block">
                Pagina no encontrada : 404_NOT_FOUND
            </div>
        </main>
    );
};

export default Error404;