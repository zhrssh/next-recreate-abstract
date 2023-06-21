function Section(header: string, navs: string[]): JSX.Element {
    return (
        <div className="flex flex-col items-start">
            <div className="mb-2 font-bold text-xl">{header}</div>
            {navs.map((value: string) => (
                <button type="button" className="mb-1 font-bold text-xs hover:text-slate-400" onClick={() => alert(`You've pressed ${value}`)}>{value}</button>
            ))}
        </div>
    )
}

export default function Footer() {
    return (
        <div className="grid grid-cols-5 m-auto px-24 py-12 bg-black text-slate-100">
            {Section("Lumina", ["Branches"])}
            {Section("Resources", ["Blog", "Help Center", "Release Notes", "Status"])}
            {Section("Community", ["Twitter", "LinkedIn", "Facebook", "Dribbble", "Podcast"])}
            <div className="flex flex-col gap-6">
                {Section("Company", ["About Us", "Careers", "Legal"])}
                <div>
                    <div className="mb-1 font-extrabold text-xs">Contact Us</div>
                    <div className="font-semibold text-xs">info@lumina.com</div>
                </div>
            </div>
            <div className="flex flex-col-reverse pt-[7.5rem] font-semibold gap-4 ">
                © Copyright 2022 <br/>
                Lumina Studio Design, Inc. <br/>
                All rights reserved
                <img src="images/face-solid-240.png" className="bg-slate-50 rounded-xl w-8 h-8" />
            </div>
        </div>
    )
}