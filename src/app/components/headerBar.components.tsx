export default function HeaderBar() {
    return (
        <>
            <header className="flex justify-between items-center bg-black text-slate-100 px-16 py-4">
                <div className="font-serif font-bold text-xl">
                    Lumina | Help Center
                </div>
                <div className="flex flex-row gap-2">
                    <button type="button" className="border border-slate-100 rounded px-3 py-1 bg-stone-900 hover:bg-stone-500 focus-within:bg-stone-500 outline-none text-sm" onClick={e => alert("You've clicked submit!")}>Submit a request</button>
                    <button type="button" className="border-0 rounded px-5 py-1 bg-indigo-600 hover:bg-indigo-400 focus-within:bg-indigo-400 outline-none text-sm" onClick={e => alert("You've clicked sign in!")}>Sign in</button>
                </div>
            </header>
        </>
    )
}