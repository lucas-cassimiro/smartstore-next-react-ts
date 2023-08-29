import { Container } from "./styles";

import LogoFacebook from "../../assets/logo-facebook.png";

import LogoInstagram from "../../assets/logo-instagram.png";
import LogoTwitter from "../../assets/logo-twitter.png";
import LogoTiktok from "../../assets/logo-tiktok.png";
import IconBaixeAqui from "../../assets/icon-baixe-aqui.svg";

import Image from "next/image";

export default function Footer() {
    return (
        <Container>
            <ul>
                <li>
                    <a href="#">Nossas lojas</a>
                </li>
                <li>
                    <a href="#">Suporte</a>
                </li>
                <li>
                    <a href="#">Minha conta</a>
                </li>
                <li>
                    <a href="#">Serviços</a>
                </li>
            </ul>

            <ul>
                <div>
                    <h1>Institucional</h1>
                </div>
                <div className="div">
                    <div>
                        <li>
                            <a href="">Sobre</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                        <li>
                            <a href="">Canal Educativo</a>
                        </li>
                        <li>
                            <a href="">Canal Corporativo</a>
                        </li>
                        <li>
                            <a href="">Representantes</a>
                        </li>
                        <li>
                            <a href="">Condições de Frete</a>
                        </li>
                    </div>
                    <div>
                        <li>
                            <a href="">Fale Conosco</a>
                        </li>
                        <li>
                            <a href="">Trocas e Devoluções</a>
                        </li>
                        <li>
                            <a href="">Políticas de Privacidade</a>
                        </li>
                        <li>
                            <a href="">Trabalhe Conosco</a>
                        </li>
                        <li>
                            <a href="">Assistência Técnica</a>
                        </li>
                        <li>
                            <a href="">Black Friday</a>
                        </li>
                    </div>
                </div>
            </ul>

            <div>
                <h2>Sac 4002-8922</h2>
                <span>Segunda a sexta das 08h às 20h</span>
                <span>Sábados das 08h às 19h</span>
                <div>
                    <h2>Redes sociais</h2>
                    <div>
                        <Image src={LogoFacebook} alt="Logo do Facebook" />
                        <Image src={LogoInstagram} alt="Logo do Instagram" />
                        <Image src={LogoTwitter} alt="Logo do Twitter" />
                        <Image src={LogoTiktok} alt="Logo do Tiktok" />
                    </div>
                    <h3>App Smart fidelidade</h3>
                    <Image
                        src={IconBaixeAqui}
                        alt="Ícone do Baixe Aqui"
                        priority={true}
                    />
                </div>
            </div>

            <div className="social-media">
                <h2>Redes sociais</h2>
                <div>
                    <Image src={LogoFacebook} alt="Logo do Facebook" />
                    <Image src={LogoInstagram} alt="Logo do Instagram" />
                    <Image src={LogoTwitter} alt="Logo do Twitter" />
                    <Image src={LogoTiktok} alt="Logo do Tiktok" />
                </div>
                <h3>App Smart fidelidade</h3>
                <Image
                    src={IconBaixeAqui}
                    alt="Ícone do Baixe Aqui"
                    priority={true}
                />
            </div>
        </Container>
    );
}
