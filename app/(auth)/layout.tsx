export default function AuthLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return <section className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-50 from-10% via-indigo-200 via-30% to-indigo-300 to-90%">
        {children}
    </section>
}