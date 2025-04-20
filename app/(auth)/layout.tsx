export default function AuthLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return <section className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-200 from-10% via-indigo-300 via-30% to-indigo-500 to-90%">
        {children}
    </section>
}