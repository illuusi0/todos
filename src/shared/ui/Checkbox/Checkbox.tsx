import styled from 'styled-components';

const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.75rem;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<{ $checked: boolean }>`
  display: inline-block;
  width: 28px;
  height: 28px;
  border: 1px solid ${props => props.$checked ? '#bddad5' : '#e6e6e6'};
  border-radius: 50%;
  transition: all 0.2s;
  position: relative;
  
  &:after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #5dc2af;
    font-size: 16px;
    opacity: ${props => props.$checked ? 1 : 0};
  }

  ${CheckboxContainer}:hover & {
    border-color: ${props => props.$checked ? '#bddad5' : '#b4b4b4'};
  }
`;

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  'data-testid'?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, 'data-testid': testId }) => (
  <CheckboxContainer>
    <HiddenCheckbox
      checked={checked}
      onChange={onChange}
      data-testid={testId}
    />
    <StyledCheckbox $checked={checked} />
  </CheckboxContainer>
); 