import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 3rem 1rem;
`

export const Content = styled.div`
    width: 100%;
    max-width: 1200px;

    display: flex;
    flex-direction: column;
    gap: 4rem;
`

export const DividerBackground = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Divider = styled.div`
    width: 100%;
    max-width: 0.3rem;
    height: 5rem;

    border-radius: 3rem;

    background: #FF0000;
`

export const NameAndSocialMedias = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    padding: 2rem;
    border-bottom-right-radius: 3rem;

    box-shadow: 5px 8px 12px 15px rgba(150, 10, 100, 0.1);

    @media (max-width: 800px) {
        transition: 2s;
        grid-template-columns: 1fr;
        padding: 1rem;
    }
`

export const ColorDiv = styled.div`
    width: 100%;
    height: 6rem;

    border-top-left-radius: 15rem;
    border-bottom-right-radius: 15rem;

    background: #A52A2A;
`

export const ImgAndName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;

    img {
        width: 100%;
        max-width: 22rem;

        border-radius: 50%;
        margin: -5rem 0 0 0;

        box-shadow: 1px 3px 3px 3px rgba(150, 10, 100, 0.1);
    }

    @media (max-width: 800px) {
        transition: 2s;
        align-items: center;
        margin: 0 0 1rem 0;
    }
`

export const FunctionAndIcons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h2 {
        font-size: 1.5rem;
        font-weight: 600;
    }

    p {
        font-size: 1.2rem;
        font-weight: 600;
    }

    div {
        display: flex;
        gap: 1rem;

        margin: -0.5rem 0 0 0;

        a {
            display: flex;
            align-items: center;

            color: red;
            position: relative;
            animation: iconsmoving 1.5s infinite linear alternate;

            @keyframes iconsmoving {
                0%   {color:#000000; left:0px; top:0px;}
                25%  {color:#FF0000; left:0.5rem; top:0px;}
                50%  {color:#000000; left:0.5rem; top:0.5rem;}
                75%  {color:#FF0000; left:0px; top:0.5rem;}
                100% {color:#000000; left:0px; top:0px;}
            }
        }
    }
`

export const PersonalProfile = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 600px) {
        transition: 2s;
        grid-template-columns: 1fr;
    }
`

export const PersonalProfileDescriptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    border-radius: 0.5rem;

    box-shadow: 1px 3px 3px 3px rgba(150, 10, 100, 0.1);

    span {
        display: none;
    }

    h2 {
        font-weight: 600;
        margin: 0 0 1rem 0;
    }

    p {
        text-align: center;
    }

    @media (max-width: 600px) {
        span {
            transition: 2s;
            display: flex;
            margin: 0 0 0.5rem 0;
        }
    }
`

export const PersonalProfileIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 2rem 0;
    border-radius: 0.5rem;

    box-shadow: 1px 3px 3px 3px rgba(150, 10, 100, 0.1);

    i {
        display: flex;
    }

    @media (max-width: 600px) {
        transition: 2s;
        display: none;
    }
`

export const PersonalGoal = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p {
            font-weight: 600;
        }

        img {
            display: flex;

            width: 100%;

            border-radius: 0.5rem;
        }
    }

    @media (max-width: 600px) {
        transition: 2s;
        grid-template-columns: 1fr;
        gap: 4rem;
    }
`

export const PersonalGoalDescriptions = styled.div`
    border-radius: 0.5rem;

    box-shadow: 1px 3px 3px 3px rgba(150, 10, 100, 0.1);
`

export const ContactsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    padding: 2rem 1rem;

    background-image: url('https://venezvit.com/wp-content/uploads/2020/06/CONTACT-US.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    color: #FFFFFF;
`

export const ContactsContent = styled.div`
    width: 100%;
    max-width: 800px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1rem;
    
    border: 5px solid #FFFFFF;
`

export const IconAndTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 0 1rem 0;
`

export const SocialMedias = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        a {
            display: flex;
            align-items: center;
            gap: 0.3rem;

            color: #FFFFFF;
        }
    }

    @media (max-width: 552px) {
        transition: 2s;
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`

export const MainProjects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        margin: 0 0 2rem 0;
    }
`

export const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    @media (max-width: 805px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 530px) {
        grid-template-columns: 1fr;
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1rem;
    
    box-shadow: 1px 3px 3px 3px rgba(150, 10, 100, 0.1);

    h3 {
        font-weight: 600;
    }

    p {
        text-align: center;
        margin: 1rem 0;

        height: 8rem;

        @media (max-width: 985px) {
            height: 10rem;
        }

        @media (max-width: 805px) {
            height: 8rem;
        }
    }

    img {
        width: 100%;
        border-radius: 0.5rem;

        height: 12rem;

        @media (max-width: 530px) {
            max-width: 70%;
        }

        @media (max-width: 370px) {
            max-width: 100%;
        }
    }
`

export const FeaturedProject = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    p {
        text-align: center;
        margin: 1rem 0 0 0;
    }
`

export const FeaturedProjectImgs = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    margin: 2rem 0 0 0;

    @media (max-width: 628px) {
        grid-template-columns: 1fr;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`

export const MobileImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        max-width: 15rem;
    }
`

export const DesktopImages = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        max-width: 25rem;
        border-radius: 0.5rem;
    }
`

export const ProfessionalHistory = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        margin: 0 0 1rem 0;
    }
`

export const JustOneCard = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1rem;
    margin: 0 0 2rem 0;
    border-radius: 0.5rem;

    box-shadow: 1px 3px 3px 3px rgba(150, 10, 100, 0.1);

    @media (max-width: 585px) {
        width: 100%;
        text-align: center;
        margin: 0 0 1rem 0;
    }
`

export const ProfessionalHistoryContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    div {
        display: flex;
        flex-direction: column;

        padding: 1rem;
        border-radius: 0.5rem;

        box-shadow: 1px 3px 3px 3px rgba(150, 10, 100, 0.1);
    }

    @media (max-width: 585px) {
        width: 100%;
        grid-template-columns: 1fr;
        text-align: center;
    }
`

export const Span = styled.span`
    font-weight: 600;
    margin: 0 0 0.5rem 0;
`

export const AcademicEducation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        margin: 0 0 1rem 0;
    }
`

export const AcademicEducationContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    div {
        display: flex;
        flex-direction: column;

        padding: 1rem;
        border-radius: 0.5rem;

        box-shadow: 1px 3px 3px 3px rgba(150, 10, 100, 0.1);
    }

    @media (max-width: 585px) {
        width: 100%;
        grid-template-columns: 1fr;
        text-align: center;
    }
`

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    h2 {
        font-weight: 600;
        margin: 0 0 2rem 0;
    }
`

export const Skills = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    width: 100%;

    @media (max-width: 585px) {
        grid-template-columns: 1fr;
    }
`

export const SkillsColumns = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    padding: 1rem;

    box-shadow: 5px 5px 10px rgba(150, 10, 100, 0.1);

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        img, i {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 100%;
            max-width: 3rem;
        }
    }
`

export const SkillsInfoAPI = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 100%;
        max-width: 2.5rem;

        display: flex;

        border-radius: 50%;

        background: #FFFFFF;
    }
`