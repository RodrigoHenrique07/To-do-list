import styled from 'styled-components';

interface ButtonActive {
  active: boolean;
}

export const ContainerSidebar = styled.div`
  height: 100vh;
  padding: 50px 0;
  width: 270px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  /* z-index: 1200;
    position: fixed;
    top: 0;
    outline: 0;
    left: 0; */
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  background-color: ${({ theme }) => theme.WHITE_100};

  @media (max-width: 600px) {
    height: 100px;
    border-right: none;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    width: 100%;
    padding: 20px;
  }
`;

export const List = styled.ul`
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 600px) {
    > li {
      &:nth-child(2) {
        svg {
          fill: #1fcc79;
        }
      }
    }
  }
`;

export const ListItem = styled.li`
  cursor: pointer;
`;

export const ListButton = styled.button`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  padding: 8px 16px;
  transition: all 0.3s;

  > svg {
    transition: all 0.3s;
  }

  &:hover {
    background-color: #1fcc79;
    color: white;
    > svg {
      fill: white;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
    padding: 0;

    &:hover {
      background-color: transparent;
      color: #9fa5c0;

      filter: none;

      > svg {
        fill: #1fcc79;
      }
    }
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0rem;
  top: 0rem;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  @media (max-width: 600px) {
    align-items: end;
  }
`;

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 400px;
  padding: 40px;
  background-color: ${({ theme }) => theme.WHITE};
  position: relative;
  border-radius: 32px;

  @media (max-width: 480px) {
    border-radius: 32px 32px 0 0;
    height: auto;
  }
`;

export const FormCreated = styled.form`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const TitleCreated = styled.p`
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  line-height: 27px;
`;

export const InputCreated = styled.input`
  border-radius: 32px;
  border: 1px solid #d0dbea;
  background: #fff;
  padding: 19px 25px;
  width: 100%;

  &:placeholder {
    color: #9fa5c0;
    font-size: 15px;
    font-weight: 500;
  }

  &:focus {
    border: 1px solid #9fa5c0;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 15px;
`;

export const ButtonForm = styled.button<ButtonActive>`
  width: 156px;
  padding: 19px 32px;
  border-radius: 32px;
  font-size: 15px;

  background-color: ${({ theme, active }) =>
    active ? theme.GREEN_200 : theme.WHITE_100};
  color: ${({ theme, active }) => (active ? theme.WHITE : theme.BLACK_100)};
  transition: all 0.3s;

  &:hover {
    background: ${({ theme }) => theme.GREEN_200};
    color: white;
  }
`;
