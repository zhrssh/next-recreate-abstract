import NavigationItem from "./navigationItem.component"

type NavigationItemProps = {
    imagePath: string,
    title: string,
    description: string
}

const data = [
    {
        "imagePath": "images/git-branch-regular-240.png",
        "title": "Branches",
        "description": "Lumina Branches lets you manage, version, and document your designs in one place."
    },
    {
        "imagePath": "images/user-account-solid-240.png",
        "title": "Manage your account",
        "description": "Configure your account settings, such as your email, profile details, and password."
    },
    {
        "imagePath": "images/chalkboard-regular-240.png",
        "title": "Manage organizations, teams, and projects",
        "description": "Use Lumina organizations, teams, and projects to organize your people and your work."
    },
    {
        "imagePath": "images/dollar-circle-regular-240.png",
        "title": "Manage billing",
        "description": "Change subscriptions and payment details."
    },
    {
        "imagePath": "images/key-regular-240.png",
        "title": "Authenticate to Lumina",
        "description": "Set up and configure SSO, SCIM, and Just-in-Time provisioning."
    },
    {
        "imagePath": "images/conversation-regular-240.png",
        "title": "Lumina support",
        "description": "Get in touch with a human."
    }
]

export default async function Navigations() {
    return (
        <div className="flex flex-col items-center">
            <div className="m-auto px-56 py-16 grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-8">
                {data.map(({imagePath, title, description} : NavigationItemProps) => (
                    <NavigationItem imagePath={imagePath} title={title} description={description} />
                ))}
            </div>
        </div>
    )
}

