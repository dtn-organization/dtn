import styled, {css} from "styled-components";
import {boxShadow, color, radius, transition} from "../../utilities/variables";
import {rgba, lighten} from 'polished';

const control = `
  background-color: transparent;
  border: none;
  height: 100%;
  display: flex;
  align-items: center;
`;

const caret = (color: any) => (css`
  height: 10px;
  width: 10px;
  display: block;
  border-style: solid;
  border-width: 1px;
  border-color: ${color} ${color} transparent transparent;
  transform: rotate(-45deg);
`);

export const Wrapper = styled.section`
  direction: rtl;
  border-radius: ${radius.tiny};
  color: ${p => p.color};
  position: relative;
  ${p => boxShadow(p)};

  & * {
    margin: 0;
    padding: 0;
    list-style-type: none;
    box-sizing: border-box;
  }
`;

export const Header = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  border-top-right-radius: ${radius.tiny};
  border-top-left-radius: ${radius.tiny};
  background-color: ${color.light};
  border-bottom: 1px solid ${rgba(color.dark, 0.4)};
`;

export const Controls = styled.div`
  display: flex;
`;

export const ControlRight = styled.button.attrs(_ => ({
  type: 'button'
}))<{radius: any}>`
  padding-right: 15px;
  cursor: pointer;
  ${control};
  
  ${(p: any) => (p.radius) && css`
    border-top-right-radius: ${radius.tiny};
  `}
`;

export const CaretRight = styled.i`
  ${caret(color.dark)};
  transform: rotate(45deg) !important;
`;

export const ControlLeft = styled.button.attrs(_ => ({
  type: 'button'
}))<{radius: any}>`
  padding-left: 15px;
  cursor: pointer;
  ${control};

  ${(p: any) => (p.radius) && css`
    border-top-left-radius: ${radius.tiny};
  `}
`;

export const CaretLeft = styled.i`
  ${caret(color.dark)};
  transform: rotate(-135deg) !important;
`;

export const Title = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: ${color.dark};
`;

export const Body = styled.div`
  border-bottom-right-radius: ${radius.tiny};
  border-bottom-left-radius: ${radius.tiny};
  background-color: ${color.light};
`;

export const DaysOfWeek = styled.ul`
  display: flex;
  justify-content: right;
`;

export const DaysOfWeekItem = styled.li`
  width: 14.285714%;
  height: 30px;
`;

export const DaysOfWeekContent = styled.span`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${rgba(color.dark, 0.6)};
  font-size: 0.6rem;
`;

export const ActualDays = styled.ul`
  display: flex;
  justify-content: right;
  flex-wrap: wrap;
  border-bottom-right-radius: ${radius.tiny};
  border-bottom-left-radius: ${radius.tiny};
`;

export const ActualDaysItem = styled.li`
  width: 14.285714%;
  height: 40px;
  overflow-x: hidden;
  padding: 3px;
`;

export const ActualDaysContent = styled.span<{today: any, holiday: any, selected: any}>`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  font-size: 1rem;
  transition: ${transition};
  background-color: ${color.light};
  color: ${lighten(0.15, color.dark)};
  border-radius: ${radius.tiny};
  
  ${(p: any) => (p.today) && css`
    border: 1px solid ${p => p.theme.primaryColor};
  `}

  ${(p: any) => (p.holiday) && css`
    color: ${color.red};
  `}
  
  ${(p: any) => (p.selected) && css`
    background-color: ${p => p.theme.primaryColor};
    color: ${color.light};
  `}
`;





