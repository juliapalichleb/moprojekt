import styled from "styled-components";
import { CandidateInfo } from "../index";

const CandidateListContainer = styled.div`
  width:100%;
  height:100%;
  display:flex;
  align-items: center;
  flex-direction: column;
`

const CandidateList = ({ allCandidate }) =>
    <CandidateListContainer>
        {allCandidate.map((user, i) => <CandidateInfo candidate={user} key={i} />)}
    </CandidateListContainer>

export default CandidateList