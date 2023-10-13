import styled, {css} from 'styled-components';
import imagesss from "./images/Rectangle 1.png"


function App() {
    return (

        <Form>
            <Field>
                <ImgWrapper src={imagesss}/>
                <TextWrapper>Headline</TextWrapper>
                <TextOverview>Faucibus. Faucibus. Sit sit sapien sit
                    tempusrisu ut. Sit molestie ornare in
                    venen.</TextOverview>
                <ButtonBtn color={'#4E71FE'} primary>See more</ButtonBtn>
                <ButtonBtn color={'#4E71FE'} outlined>Save</ButtonBtn>


            </Field>

        </Form>

    );
}

export default App;


const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: snow;


`;

const Field = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 350px;
  border-radius: 15px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.5);
`;


const ImgWrapper = styled.img`
  width: 280px;
  height: 170px;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 10px;
`;

const TextWrapper = styled.div`
  width: 70px;
  height: 19px;
  color: #000000;
  margin-top: 20px;
  margin-left: 20px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`

const TextOverview = styled.div`
  width: 260px;
  height: 40px;
  margin-top: 19px;
  margin-left: 20px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #ABB3BA;

`
type ButtonBtnType = {
    color?: string
    primary?: boolean
    outlined?: boolean
}

const ButtonBtn = styled.button<ButtonBtnType>`
  border: none;
  width: 86px;
  height: 30px;
  margin-top: 18px;
  margin-left: 20px;
  border-radius: 5px;

  ${props => props.outlined && css<ButtonBtnType>`
    border: 2px solid ${props => props.color};
    color: ${props => props.color};
    background-color: transparent;
  `}

  ${props => props.primary && css<ButtonBtnType>`
    background-color: ${props => props.color};
    color: snow;

  `}

`