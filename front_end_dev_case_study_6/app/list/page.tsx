import {AdvisorsService} from "@/modules/advisors/advisors.service";
import AdvisorsList from "@/components/list/advisors-list";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'List with custom CSS',
    description: "This list is styled with custom CSS",
}

export default async function Page() {
    const advisors = await AdvisorsService.findAdvisors();

    return <AdvisorsList advisors={advisors}/>;
}
