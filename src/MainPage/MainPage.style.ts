import styled from 'styled-components'

export const PageWrapper = styled.div`
  position: absolute;
  text-align: center;
  width: 25%;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    width: 75%;
  }
`

export const SubmitWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.p`
  width: 100%;
  font-size: 32px;
`

export const Answer = styled.p<{ positive: boolean }>`
  font-size: 72px;
  margin: 0;
  color: ${({ positive }) => (positive ? 'green' : 'red')};
`

export const QuestionInput = styled.input`
  width: 100%;
  font-size: 24px;
  border: 1px solid black;
`

export const Button = styled.button`
  font-size: 24px;
`
