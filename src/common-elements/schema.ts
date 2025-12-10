import styled from '../styled-components';
import { darken } from 'polished';
import { deprecatedCss } from './mixins';

export const OneOfList = styled.div`
  margin: 0 0 3px 0;
  display: inline-block;
`;

export const OneOfLabel = styled.span`
  font-size: 0.9em;
  margin-right: 10px;
  color: ${props => props.theme.colors.primary.main};
  font-family: ${props => props.theme.typography.headings.fontFamily};
}
`;

export const OneOfButton = styled.button<{ $active: boolean; $deprecated: boolean }>`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 5px;
  font-size: 0.8em;
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.primary.main};
  padding: 4px 12px;
  line-height: 1.5em;
  outline: none;
  border-radius: 8px;
  transition: all 0.15s ease;
  font-weight: 500;
  &:focus {
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary.main}33;
  }

  ${({ $deprecated }) => ($deprecated && deprecatedCss) || ''};

  ${props => {
    if (props.$active) {
      return `
      color: ${props.theme.colors.primary.contrastText};
      background-color: ${props.theme.colors.primary.main};
      &:focus {
        box-shadow: none;
        background-color: ${darken(0.1, props.theme.colors.primary.main)};
      }
      `;
    } else {
      return `
        color: ${props.theme.colors.primary.main};
        background-color: transparent;
        &:hover {
          background-color: ${props.theme.colors.primary.main}11;
        }
      `;
    }
  }}
`;

export const ArrayOpenningLabel = styled.div`
  font-size: 0.9em;
  font-family: ${props => props.theme.typography.code.fontFamily};
  &::after {
    content: ' [';
  }
`;

export const ArrayClosingLabel = styled.div`
  font-size: 0.9em;
  font-family: ${props => props.theme.typography.code.fontFamily};
  &::after {
    content: ']';
  }
`;
