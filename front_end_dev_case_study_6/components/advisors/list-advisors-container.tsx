'use client';

import AdvisorsContainer from "@/components/advisors/advisors-container";
import AdvisorsList from "@/components/list/advisors-list";
import { AdvisorResponseType } from "@/modules/advisors/advisors.type";

type ListAdvisorsContainerProps = {
    advisors: AdvisorResponseType[];
};

export default function ListAdvisorsContainer({
    advisors,
}: ListAdvisorsContainerProps) {
    return (
        <AdvisorsContainer advisors={advisors}>
            {(updatedAdvisors) => <AdvisorsList advisors={updatedAdvisors} />}
        </AdvisorsContainer>
    );
}
