import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Meus  <strong className="purple">Projetos </strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard              
            
              title="TRE-AM"
              description="Não é possível compartilhar projetos privados do Tribunal Regional Eleitoral (TRE-AM) devido a razões de segurança jurídica, proteção de dados pessoais, integridade do processo eleitoral, prevenção de vazamentos, preservação da independência judiciária, responsabilidade legal e 
              políticas de acesso à informação. Isso é fundamental para garantir a justiça, a privacidade, a independência e a confiabilidade do sistema eleitoral."
              
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
