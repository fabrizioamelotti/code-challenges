'use client';

import AdvisorsContainer from "@/components/advisors/advisors-container";
import MuiAdvisorsList from "@/components/mui/advisors-list";
import { AdvisorResponseType } from "@/modules/advisors/advisors.type";

type MuiAdvisorsContainerProps = {
    advisors: AdvisorResponseType[];
};

export default function MuiAdvisorsContainer({
    advisors,
}: MuiAdvisorsContainerProps) {
    return (
        <AdvisorsContainer advisors={advisors}>
            {(updatedAdvisors) => <MuiAdvisorsList advisors={updatedAdvisors} />}
        </AdvisorsContainer>
    );
}
