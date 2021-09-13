import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <div class="header">
                <div class="user">
                    <div class="user-image"> 
                        <img src="assets/eu.jpeg"/> 
                        <div class="absolute"> 15 </div> 
                    </div>

                    <div class="user-name"> Olá, <b> Guilherme Coelho Marinho </b> </div>
                </div>

                <div class="buttons-header">
                    <div class="refresh-button"> <button> <img src="assets/refresh2 1.svg" alt=""/> </button> </div>
                <div class="logout"> <button> <img src="assets/log-out.svg" alt=""/> </button> </div>
            </div>
            </div>
            <div class="bottom-bar-right-header"></div>
        </Container>
    ) 
}







