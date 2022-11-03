import styled from "styled-components";
import { Button } from "../Button";

interface iProfile {
  name: string;
  description: string;
  buttonLabel: string;
  imageUrl: string;
}

interface iCustom {
  backgroundImage: string;
}

const StyledProfile = styled.div<iCustom>`
  width: 375px;
  height: 496px;
  background-color: white;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  box-shadow: 1px 10px 10px rgba(102, 62, 51, 0.02),
    10px 20px 20px rgba(102, 62, 51, 0.04),
    20px 30px 30px rgba(102, 62, 51, 0.06),
    55px 65px 44px rgba(197, 104, 78, 0.13);

  .profilePic {
    border-radius: 100%;
    background-color: black;
    width: 232px;
    height: 232px;
    margin: 32px 71px 0 72px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${(props) =>
      props.backgroundImage
        ? props.backgroundImage
        : process.env.PUBLIC_URL + "/male_placeholder.png"});
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    justify-content: space-around;

    .name {
      color: #12121f;
      height: 32px;
      font-weight: 600;
      font-size: 24px;
      line-height: 132%;
      letter-spacing: 0.25px;
      text-align: center;
      margin: 24px 114px 0 115px;
      top: 288px;
      font-style: normal;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.25px;
      text-align: center;
      color: #afafbd;
      width: 310px;
      height: 60px;
      margin: 16px 32px 0 33px;
    }

    Button {
      margin: 28px 0 32px 0;
    }
  }
`;

export const Profile = ({
  name,
  description,
  buttonLabel,
  imageUrl,
}: iProfile) => {
  return (
    <StyledProfile backgroundImage={imageUrl}>
      <div className="profilePic" />
      <div className="info">
        <p className="name">{name}</p>
        <p>{description}</p>
        <Button label={buttonLabel} />
      </div>
    </StyledProfile>
  );
};
