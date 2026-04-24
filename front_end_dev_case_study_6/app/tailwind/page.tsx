import { Metadata } from "next";
import TailwindAdvisorsList from "@/components/tailwind/advisors-list";
import { AdvisorsService } from "@/modules/advisors/advisors.service";

export const metadata: Metadata = {
    title: 'List with Tailwind CSS',
    description: "This list is styled with Tailwind CSS",
}

export default async function Page() {
    const advisors = await AdvisorsService.findAdvisors();

    return <TailwindAdvisorsList advisors={advisors} />;
}
