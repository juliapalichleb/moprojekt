import React, { FC } from "react";
import styled from "styled-components";

import { Candidate } from "../../interfaces/Candidate";
import { CandidateInfo } from "../index";

const CandidateListContainer = styled.div`
  width:100%;
  height:100%;
  display:flex;
  align-items: center;
  flex-direction: column;
`

interface ICandidateList {
    allCandidate:Candidate[],
}

const CandidateList: FC<ICandidateList> = ({ allCandidate }) =>
    <CandidateListContainer>
        {allCandidate.map((user, i) => <CandidateInfo candidate={user} key={i} />)}
    </CandidateListContainer>

export default CandidateList