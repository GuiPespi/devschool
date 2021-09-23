import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <header class="header-left-box">    
                <div class="svg-livrodosite"> <img src="assets/book.svg" alt=""/> </div>
                <div class="title"> <span>Dev</span>School</div>
            </header>

            <div class="black-space"></div>
            <div class="management">
                <div> Gerenciamento </div>
                <img src="assets/chevron-down.svg" alt=""/>
            </div>

            <div class="space-student">
                <div> Alunos </div>
            </div>
        </Container>
    )
}