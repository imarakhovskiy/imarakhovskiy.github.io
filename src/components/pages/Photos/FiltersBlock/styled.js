import styled from 'styled-components'

export const FiltersBlockWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1rem;
`

export const StyledFilterButton = styled.button`
  background-color: ${({ isActive }) => isActive && 'rgb(90, 50, 168)'};
  color: ${({ isActive }) => isActive && 'white'};
  padding: 0.3rem 0.5rem;
  border-radius: 0.2rem;
  font-size: 1rem;
  border: 1px solid rgb(90, 50, 168);

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`
