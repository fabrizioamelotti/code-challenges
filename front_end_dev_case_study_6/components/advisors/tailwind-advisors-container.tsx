'use client';

import AdvisorsContainer from "@/components/advisors/advisors-container";
import TailwindAdvisorsList from "@/components/tailwind/advisors-list";
import { AdvisorResponseType } from "@/modules/advisors/advisors.type";

type TailwindAdvisorsContainerProps = {
    advisors: AdvisorResponseType[];
};

export default function TailwindAdvisorsContainer({
    advisors,
}: TailwindAdvisorsContainerProps) {
    return (
        <AdvisorsContainer advisors={advisors}>
            {(updatedAdvisors) => <TailwindAdvisorsList advisors={updatedAdvisors} />}
        </AdvisorsContainer>
    );
}
