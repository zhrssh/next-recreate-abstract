type NavigationItemProps = {
    imagePath: string,
    title: string,
    description: string
}

export default function NavigationItem({imagePath, title, description } : NavigationItemProps) {
    return (
        <div className="flex gap-6 p-4 items-start">
            <img src={imagePath} className="object-contain w-[5rem] h-[5rem]" />
            <div className="flex flex-col items-start">
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="mb-2">{description}</p>
                <button type="button" className="text-indigo-400">Learn More →</button>
            </div>
        </div>
    )
}