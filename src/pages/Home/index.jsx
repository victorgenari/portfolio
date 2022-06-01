// Hooks
import { useEffect, useState } from "react";

// Icons
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaMailBulk, FaSteam, FaUserTie } from 'react-icons/fa'
import { RiWhatsappFill, RiContactsBookFill } from 'react-icons/ri'
import { GoGraph } from 'react-icons/go'
import { GrProjects } from 'react-icons/gr'
import { BiCurrentLocation } from 'react-icons/bi'

// Imgs
import ProgrammingImg from '../../assets/images/programming-image.jpg'

// CSS
import {
    Container, Content, NameAndSocialMedias, PersonalProfile, PersonalGoal, ContactsContainer, ContactsContent, FeaturedProject,
    MainProjects, ProfessionalHistory, AcademicEducation, Skills, ImgAndName, FunctionAndIcons, ColorDiv, SocialMedias, IconAndTitle, PersonalProfileIcon, PersonalProfileDescriptions, PersonalGoalDescriptions
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



    // const [reposApi, setReposApi] = useState()

    // useEffect(() => {
    //     fetch('https://api.github.com/users/victorgenari/repos')
    //         .then(response => response.json())
    //         .then(data => {
    //             setReposApi(data)
    //         })
    // }, [])


    return (
        <Container>
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
                            <a href="https://www.linkedin.com/in/victorgenari/" target="_blank"><BsLinkedin size={25} /></a>
                            <a href="https://www.github.com/victorgenari" target="_blank"><BsGithub size={25} /></a>
                            <a href="mailto:victor.olr@hotmail.com" target="_blank"><FaMailBulk size={28} /></a>
                            <a href="https://api.whatsapp.com/send?phone=++5511960343362&text=Olá! Este é o contato de Victor Genari .."
                                target="_blank"><RiWhatsappFill size={32} /></a>
                            <a href="https://steamcommunity.com/id/k1genari/" target="_blank"><FaSteam size={28} /></a>

                        </div>
                    </FunctionAndIcons>
                </NameAndSocialMedias>

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

                <PersonalGoal>
                    <div>
                        <img src={ProgrammingImg} alt="Imagem Programação" title="Objetivo Profissional" />
                    </div>

                    <PersonalGoalDescriptions>
                        <i><GoGraph size={40} /></i>
                        <h2>Objetivo Profissional</h2>
                        <p>Frontend Developer</p>
                    </PersonalGoalDescriptions>
                </PersonalGoal>

                <ContactsContainer>
                    <ContactsContent>
                        <IconAndTitle>
                            <i><RiContactsBookFill size={40} /></i>
                            <h2>Entre em Contato</h2>
                        </IconAndTitle>

                        <SocialMedias>
                            <div>
                                <a href="mailto:victor.olr@hotmail.com" target="_blank"><FaMailBulk size={28} /> victor.olr@hotmail.com</a>
                                <a href="https://www.google.com/maps/place/S%C3%A3o+Paulo,+SP/@-23.5996163,-46.6518251,10.75z/data=!4m5!3m4!1s0x94ce448183a461d1:0x9ba94b08ff335bae!8m2!3d-23.5557714!4d-46.6395571" target="_blank"><BiCurrentLocation size={30} /> São Paulo - Brasil</a>
                            </div>

                            <div>
                                <a href="https://www.linkedin.com/in/victorgenari/" target="_blank"><BsLinkedin size={28} /> linkedin.com/in/victorgenari</a>
                                <a href="https://github.com/victorgenari" target="_blank"><BsGithub size={28} /> github.com/victorgenari</a>
                            </div>
                        </SocialMedias>
                    </ContactsContent>
                </ContactsContainer>

                <MainProjects>
                    <i><GrProjects size={40} /></i>
                    <h2>Principais Projetos</h2>
                    <span>Pegar os projetos do Git</span>
                </MainProjects>

                <FeaturedProject>
                    <h2>Projeto em Destaque</h2>
                    <p>O projeto atual de trabalho consiste em criar uma loja virtual completa em função de Delivery. Estou entre os responsáveis pelo desenvolvimento do Front-end. O projeto traz consumos de uma API Rest resultando no layout do Front-end. O Back-end está online em Node.js, sendo ambos atualizados conforme o desenvolvimento da aplicação.</p>
                </FeaturedProject>

                <ProfessionalHistory>
                    <h2>Histórico Profissional</h2>
                    <span>Frontend Developer</span>
                    <span>XC Tech, Tempo integral</span>
                    <span>abr de 2022 - o momento · 3 meses</span>
                    <span>Barueri, São Paulo - Brasil</span>

                    <span>Information Security Analyst</span>
                    <span>Walmart, Inc - Tempo integral</span>
                    <span>fev. de 2015 - dez. de 2020 - 5 anos 11 meses</span>
                    <span>Barueri, São Paulo - Brasil</span>

                    <span>Administrative Assistant</span>
                    <span>JTR Logística e Transporte LTDA - Tempo integral</span>
                    <span>ago. de 2012 - dez. de 2013 - 1 ano 5 meses</span>
                    <span>Barueri, São Paulo - Brasil</span>
                </ProfessionalHistory>

                <AcademicEducation>
                    <h2>Formação Acadêmica</h2>
                    <span>Estácio, São Paulo</span>
                    <span>Análise e Desenvolvimento de Sistemas</span>
                    <span>Janeiro 2022 - Julho 2024</span>

                    <span>Rocketseat</span>
                    <span>Ignite - React.js</span>
                    <span>Fevereiro 2022 - Novembro 2022</span>

                    <span>Universidade Anhembi Morumbi, São Paulo</span>
                    <span>Gestão Comercial</span>
                    <span>Janeiro 2020 - Maio 2021</span>
                </AcademicEducation>

                <Skills>
                    <h2>Habilidades</h2>
                    <span>HTML</span>
                    <span>CSS (100% Responsive)</span>
                    <span>SCSS &amp; Styled-components</span>
                    <span>Git &amp; Github</span>
                    <span>React.js - Javascript</span>
                    <span>Typescript (Learning)</span>
                    <span>API RestFul</span>
                    <span>MySQL (Learning)</span>
                </Skills>

            </Content>
        </Container>
    )
}