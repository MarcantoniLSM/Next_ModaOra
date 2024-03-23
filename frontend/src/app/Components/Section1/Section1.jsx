import Card from '../Card/Card'
import './Section1.css'

export default function Section1(){
    return(
        <section className='section1'>
            <h1>A escolha certa para momentos especiais</h1>
            <p>Com uma equipe de designers talentosos e experientes,
                 criamos roupas que combinam qualidade, estilo e conforto.
                  Utilizamos materiais de alta qualidade e técnicas de fabricação
                   de ponta para garantir que cada peça seja durável e bonita. 
                   Desde vestidos até blusas, calças e saias,
                    nossas coleções são criadas para pessoas modernas que desejam
                     se sentir confiantes e sofisticadas. Nós nos esforçamos para oferecer
                      a melhor experiência de compra possível, garantindo a satisfação dos nossos clientes em cada etapa do processo.</p>
            <ul>
                <li>
                    <Card 
                        source={'imagens/modelo5.jpg'} 
                        name={'vest romasa'} 
                        alt={'Modelo forte e carismático'}
                        description={'Forte & Carismático'}
                        />
                </li>
                <li>
                <Card 
                        source={'imagens/modelo2.jpg'} 
                        name={'Jacket fima'} 
                        alt={'Modelo de personalidade marcante'}
                        description={'personalidade marcante'}
                        />
                </li>
                <li>
                <Card 
                        source={'imagens/modelo4.jpg'} 
                        name={'jacket black kira'} 
                        alt={'Modelo empoderada e atraente'}
                        description={'empoderamento atraente'}
                        />
                </li>
            </ul>
        </section>
    )
}