// Hooks
import { useEffect, useState } from "react";

// Icons
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaMailBulk, FaSteam, FaUserTie } from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'
import { GoGraph } from 'react-icons/go'
import { GiFlagObjective } from 'react-icons/gi'
import { BiCurrentLocation } from 'react-icons/bi'
import { SiStyledcomponents } from 'react-icons/si'

// Imgs
import ProgrammingImg from '../../assets/images/programming-image.jpg'
import DeliveryAppImg from '../../assets/images/DeliveryStoreImg.jpg'
import PortfolioImg from '../../assets/images/portfolio-image.jpg'
import AttendanceList from '../../assets/images/attendance-list.jpg'
import DeliveryStoreImg2 from '../../assets/images/DeliveryStoreImg2.jpg'
import DeliveryStoreImg3 from '../../assets/images/DeliveryStoreImg3.jpg'
import DeliveryStoreImg4 from '../../assets/images/DeliveryStoreImg4.jpg'
import HTMLLogo from '../../assets/images/icons/html5.svg'
import CSSLogo from '../../assets/images/icons/css3.svg'
import SCSSLogo from '../../assets/images/icons/sass.svg'
import GitLogo from '../../assets/images/icons/git.svg'
import ReactLogo from '../../assets/images/icons/react.svg'
import JSLogo from '../../assets/images/icons/javascript.svg'
import TSLogo from '../../assets/images/icons/typescript.svg'
import APIRestFulLogo from '../../assets/images/icons/restapi.png'
import NodeJSLogo from '../../assets/images/icons/nodejs.svg'
import MySQLLogo from '../../assets/images/icons/mysql.svg'

// CSS
import {
    Container, Content, NameAndSocialMedias, PersonalProfile, PersonalGoal, ContactsContainer, ContactsContent, FeaturedProject,
    MainProjects, ProfessionalHistory, AcademicEducation, Skills, ImgAndName, FunctionAndIcons, ColorDiv, SocialMedias, IconAndTitle,
    PersonalProfileIcon, PersonalProfileDescriptions, PersonalGoalDescriptions, Cards, Card, Divider, DividerBackground, FeaturedProjectImgs,
    MobileImage, DesktopImages, ProfessionalHistoryContent, AcademicEducationContent, Span, JustOneCard, SkillsInfoAPI,
    SkillsColumns, SkillsContainer, HeaderDiv
} from "./styles";


export function Home() {
    const [personalApi, setPersonalApi] = useState({ name: '', avatar: '' })

    useEffect(() => {
        fetch('https://api.github.com/users/victorgenari')
            .then(response => response.json())
            .then(data => {
                setPersonalApi({
                    name: data.name,
                    avatar: data.avatar_url,
                })
            })
    }, [])


    return (
        <Container>

            <HeaderDiv>
                <span>&lt;</span>
                <h1>Victor Genari</h1>
                <span>&gt;</span>
            </HeaderDiv>

            <Content>

                <NameAndSocialMedias>
                    <ImgAndName>
                        <ColorDiv></ColorDiv>
                        <img src={personalApi.avatar} alt="Victor Genari" />
                    </ImgAndName>

                    <FunctionAndIcons>
                        <h2>{personalApi.name}</h2>
                        <p>Frontend Developer</p>
                        <div>
                            <a href="https://www.linkedin.com/in/victorgenari/" target="_blank" rel="noreferrer"><BsLinkedin size={25} /></a>
                            <a href="https://www.github.com/victorgenari" target="_blank" rel="noreferrer"><BsGithub size={25} /></a>
                            <a href="mailto:victor.olr@hotmail.com" target="_blank" rel="noreferrer"><FaMailBulk size={28} /></a>
                            <a href="https://api.whatsapp.com/send?phone=++5511960343362&text=Olá! Este é o contato de Victor Genari .."
                                target="_blank" rel="noreferrer"><RiWhatsappFill size={32} /></a>
                            <a href="https://steamcommunity.com/id/k1genari/" target="_blank" rel="noreferrer"><FaSteam size={28} /></a>

                        </div>
                    </FunctionAndIcons>
                </NameAndSocialMedias>

                <DividerBackground>
                    <Divider></Divider>
                </DividerBackground>

                <PersonalProfile>
                    <PersonalProfileDescriptions>
                        <span><FaUserTie size={40} /></span>
                        <h2>Perfil Pessoal</h2>
                        <p>Sou desenvolvedor Front-end e me dedico a criar conteúdos inusitados, atemporais e ao mesmo tempo acessíveis para todos. Sempre proativo e extremamente motivado no trabalho.</p>
                    </PersonalProfileDescriptions>

                    <PersonalProfileIcon>
                        <i><FaUserTie size={250} /></i>
                    </PersonalProfileIcon>
                </PersonalProfile>

                <DividerBackground>
                    <Divider></Divider>
                </DividerBackground>

                <PersonalGoal>
                    <div>
                        <img src={ProgrammingImg} alt="Imagem Programação" title="Objetivo Profissional" />
                    </div>

                    <PersonalGoalDescriptions>
                        <i><GiFlagObjective size={40} /></i>
                        <h2>Objetivo Profissional</h2>
                        <p>Frontend Developer</p>
                    </PersonalGoalDescriptions>
                </PersonalGoal>

                <DividerBackground>
                    <Divider></Divider>
                </DividerBackground>

                <ContactsContainer>
                    <ContactsContent>
                        <IconAndTitle>
                            <h2>Entre em Contato</h2>
                        </IconAndTitle>

                        <SocialMedias>
                            <div>
                                <a href="mailto:victor.olr@hotmail.com" target="_blank" rel="noreferrer"><FaMailBulk size={28} /> victor.olr@hotmail.com</a>
                                <a href="https://www.google.com/maps/place/S%C3%A3o+Paulo,+SP/@-23.5996163,-46.6518251,10.75z/data=!4m5!3m4!1s0x94ce448183a461d1:0x9ba94b08ff335bae!8m2!3d-23.5557714!4d-46.6395571" target="_blank" rel="noreferrer"><BiCurrentLocation size={30} /> São Paulo - Brasil</a>
                            </div>

                            <div>
                                <a href="https://www.linkedin.com/in/victorgenari/" target="_blank" rel="noreferrer"><BsLinkedin size={28} /> linkedin.com/in/victorgenari</a>
                                <a href="https://github.com/victorgenari" target="_blank" rel="noreferrer"><BsGithub size={28} /> github.com/victorgenari</a>
                            </div>
                        </SocialMedias>
                    </ContactsContent>
                </ContactsContainer>

                <DividerBackground>
                    <Divider></Divider>
                </DividerBackground>

                <MainProjects>
                    <i><GoGraph size={40} /></i>
                    <h2>Principais Projetos</h2>

                    <Cards>
                        <Card>
                            <h3>Delivery App</h3>
                            <p>Este é o projeto atual em que venho trabalhando. Uma loja virtual (Delivery). Estou entre os responsáveis pelo desenvolvimento do Front-end.</p>
                            <img src={DeliveryAppImg} alt="Imagem Projeto" />
                        </Card>

                        <Card>
                            <h3>Portfólio</h3>
                            <p>Nesse projeto você terá acesso ao que eu venho estudando, meu histórico profissional/acadêmico, minhas habilidades até aqui e meus contatos.</p>
                            <img src={PortfolioImg} alt="Imagem Projeto" />
                        </Card>

                        <Card>
                            <h3>Lista de Presença</h3>
                            <p>A página foi desenvolvida no intuito de simular uma lista de presença, onde o usuário irá digitar os nomes e eles serão adicionados em formato de lista na página.</p>
                            <img src={AttendanceList} alt="Imagem Projeto" />
                        </Card>
                    </Cards>
                </MainProjects>

                <DividerBackground>
                    <Divider></Divider>
                </DividerBackground>

                <FeaturedProject>
                    <h2>Projeto em Destaque</h2>
                    <p>O projeto atual de trabalho consiste em criar uma loja virtual completa em função de Delivery. Estou entre os responsáveis pelo desenvolvimento do Front-end. O projeto traz consumos de uma API Rest resultando no layout do Front-end. O Back-end está online em Node.js, sendo ambos atualizados conforme o desenvolvimento da aplicação.</p>

                    <FeaturedProjectImgs>
                        <MobileImage>
                            <img src={DeliveryStoreImg4} alt="Imagem Projeto" />
                        </MobileImage>

                        <DesktopImages>
                            <img src={DeliveryStoreImg2} alt="Imagem Projeto" />
                            <img src={DeliveryStoreImg3} alt="Imagem Projeto" />
                        </DesktopImages>
                    </FeaturedProjectImgs>
                </FeaturedProject>

                <DividerBackground>
                    <Divider></Divider>
                </DividerBackground>

                <ProfessionalHistory>
                    <h2>Histórico Profissional</h2>

                    <JustOneCard>
                        <Span>Frontend Developer</Span>
                        <span>XC Tech, Tempo integral</span>
                        <span>abr de 2022 - o momento · 3 meses</span>
                        <span>Barueri, São Paulo - Brasil</span>
                    </JustOneCard>

                    <ProfessionalHistoryContent>
                        <div>
                            <Span>Information Security Analyst</Span>
                            <span>Walmart, Inc - Tempo integral</span>
                            <span>fev. de 2015 - dez. de 2020 - 5 anos 11 meses</span>
                            <span>Barueri, São Paulo - Brasil</span>
                        </div>

                        <div>
                            <Span>Administrative Assistant</Span>
                            <span>JTR Logíst. e Transp. LTDA - Tempo integral</span>
                            <span>ago. de 2012 - dez. de 2013 - 1 ano 5 meses</span>
                            <span>Barueri, São Paulo - Brasil</span>
                        </div>
                    </ProfessionalHistoryContent>
                </ProfessionalHistory>

                <DividerBackground>
                    <Divider></Divider>
                </DividerBackground>

                <AcademicEducation>
                    <h2>Formação Acadêmica</h2>

                    <JustOneCard>
                        <Span>Estácio, São Paulo</Span>
                        <span>Análise e Desenvolvimento de Sistemas</span>
                        <span>Janeiro 2022 - Julho 2024</span>
                    </JustOneCard>

                    <AcademicEducationContent>
                        <div>
                            <Span>Rocketseat</Span>
                            <span>Ignite - React.js</span>
                            <span>Fevereiro 2022 - Novembro 2022</span>
                        </div>

                        <div>
                            <Span>Universidade Anhembi Morumbi, São Paulo</Span>
                            <span>Gestão Comercial</span>
                            <span>Janeiro 2020 - Maio 2021</span>
                        </div>
                    </AcademicEducationContent>
                </AcademicEducation>

                <DividerBackground>
                    <Divider></Divider>
                </DividerBackground>

                <SkillsContainer>
                    <h2>Habilidades</h2>

                    <Skills>
                        <SkillsColumns>
                            <div>
                                <img src={HTMLLogo} alt="HTML Logo" />
                                <span>HTML</span>
                            </div>

                            <div>
                                <img src={CSSLogo} alt="CSS Logo" />
                                <span>CSS (100% Responsive)</span>
                            </div>

                            <div>
                                <img src={SCSSLogo} alt="SCSS Logo" />
                                <span>SASS (100% Responsive)</span>
                            </div>

                            <div>
                                <i><SiStyledcomponents size={40} /></i>
                                <span>Styled-Components (100% Responsive)</span>
                            </div>

                            <div>
                                <img src={GitLogo} alt="Git Logo" />
                                <span>Git</span>
                            </div>

                            <div>
                                <i><BsGithub size={40} /></i>
                                <span>Github</span>
                            </div>
                        </SkillsColumns>

                        <SkillsColumns>
                            <div>
                                <img src={ReactLogo} alt="React.js Logo" />
                                <span>React.js</span>
                            </div>

                            <div>
                                <img src={JSLogo} alt="Javascript Logo" />
                                <span>Javascript</span>
                            </div>

                            <div>
                                <img src={TSLogo} alt="Typescript Logo" />
                                <span>Typescript (Learning)</span>
                            </div>

                            <SkillsInfoAPI>
                                <img src={APIRestFulLogo} alt="API RestFul Logo" />
                                <span>API RestFul</span>
                            </SkillsInfoAPI>

                            <div>
                                <img src={NodeJSLogo} alt="Node Logo" />
                                <span>Node.js (Learning)</span>
                            </div>

                            <div>
                                <img src={MySQLLogo} alt="MySQL Logo" />
                                <span>MySQL (Learning)</span>
                            </div>
                        </SkillsColumns>
                    </Skills>
                </SkillsContainer>

            </Content>
        </Container>
    )
}