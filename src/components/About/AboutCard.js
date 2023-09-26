import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá pessoal, eu me chamo <span className="purple">Edgar Nero </span>
            de <span className="purple"> Manaus-AM.</span>
            <br /> Eu sou formado em Ciência da Computação pela Uninorte
            <br />
           Atualmente, trabalho como desenvolvdor full stack, e a cada dia que passa eu me sinto mais realizado trabalhando na área,
            <br />
            <br />
            Como desenvolvdor, destaco alguns pontos que considero como as minhas principais habilidades!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gosto de ensinar o que eu aprendo, além de ajudar, eu reforço o conhecimento transmitido. 
            </li>
            <li className="about-activity">
              <ImPointRight /> Estou sempre em busca de mais conhecimento, procuro entender a fundo o funcionamento das coisas.
            </li>
            <li className="about-activity">
              <ImPointRight /> Possuo um bom equipamento para desempenhar com exelência minhas atividades.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "A melhor maneira de prever o futuro é inventá-lo."{" "}
          </p>
          <footer className="blockquote-footer"> Alan Kay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
