import { Heading } from "@/components/heading"
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription"
import { Settings } from "lucide-react"


const SettingPage = async() =>{
    const isPro = await checkSubscription();
    return (
        <div>
            <Heading title="Settings" description="Manage account settings." icon={Settings} iconColor="text-gray-700" bgColor="bg-gray-700/10"/>
            <div className="px-4 lg:px-8 space-y-4">
                <div className="text-muted-foreground text-sm">
                    {isPro?"Your Pro plan is activated" : "Your Pro plan is not activated."}
                </div>
                <SubscriptionButton isPro={isPro}/>
            </div>
        </div>
    )
}
export default SettingPage