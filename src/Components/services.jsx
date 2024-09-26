import logo1 from "../assets/REDLINE PNG BN 09.png"
import foto1 from "../assets/gamerService.jpg"
import foto2 from "../assets/seguridadService.jpg"
import foto3 from "../assets/homeOficeService.jpg"
import foto4 from "../assets/hospitalService.jpg"
import foto5 from "../assets/fabricaService.jpg"
import foto6 from "../assets/empresaService.jpg"
import useResponsive from "./useResponsive";
import "../styles/services.css"

export const Services = () =>{
    const { isDesktop, isTablet, isMovile } = useResponsive();
    return (
        <main id="services">
        <h1 className="rubik-h1">Nuestros servicios</h1>
        <div className="ntdiv">
            <div className="tx">
                <h3 className="rubik-h3">A que nos dedicamos</h3>
                <p className="rubik-p">
                    En RedLine Internet, somos más que un simple proveedor de internet; somos el puente que conecta hogares, oficinas y negocios con el mundo. Ofrecemos soluciones de conectividad robustas y de alta velocidad, diseñadas para satisfacer las necesidades de cada cliente, desde familias que disfrutan del entretenimiento en línea hasta profesionales que trabajan de manera remota. Nuestro compromiso es proporcionar un servicio confiable, con atención personalizada y soporte técnico disponible 24/7, para que estés siempre conectado cuando más lo necesitas.    
                </p>
                <p className="rubik-p">
                    Entendemos que cada cliente es único, por eso ofrecemos planes flexibles y escalables que se adaptan a empresas de todos los tamaños, desde pequeñas startups hasta grandes corporaciones. Nuestros servicios permiten a las empresas gestionar sus operaciones sin interrupciones, facilitando videoconferencias, transmisión de datos y la colaboración en tiempo real. Con RedLine Internet, no solo obtienes un proveedor de internet, sino un socio tecnológico que impulsa tu éxito en un mundo cada vez más digital.
                </p>
            </div>
        {isDesktop?<div className="phCont">
                <img className="ph" src={logo1} alt=""/>
            </div>:""}
            

        </div>
        <div className="ntdiv">
            <div className="tx">
                <h3 className="rubik-h3">Hogares, Home Office, entretenimiento y vigilancia</h3>
                <p className="rubik-p">Nuestros planes de internet para hogares están diseñados para ofrecer la mejor conectividad a cada miembro de la familia. Sabemos que hoy en día, una conexión rápida y confiable es esencial para el día a día, ya sea para trabajar desde casa, estudiar en línea, o disfrutar de entretenimiento digital. Ofrecemos una variedad de planes que se adaptan a diferentes necesidades, desde velocidades ideales para usuarios ocasionales hasta opciones más avanzadas para quienes requieren un rendimiento superior. Con nuestra tecnología de vanguardia, puedes estar seguro de que todos en tu hogar podrán disfrutar de una experiencia en línea sin interrupciones, con la capacidad de conectar múltiples dispositivos simultáneamente sin comprometer la velocidad.</p>
                <p className="rubik-p">Además de la velocidad, nuestros planes de internet para hogares incluyen soporte técnico especializado y herramientas de seguridad para proteger tu red. Ya sea que necesites un plan básico para navegar por la web y usar redes sociales, o un plan avanzado para streaming en alta definición y gaming en línea, tenemos la solución perfecta para ti. Nos comprometemos a brindar un servicio que no solo cumpla con tus expectativas, sino que también se anticipe a tus necesidades futuras, ofreciéndote flexibilidad y fiabilidad en cada conexión. Con nuestros planes, tu hogar estará siempre conectado, listo para enfrentar los desafíos de la vida digital moderna.</p>
            </div>
            <div className="gallery">
                <img src={foto1} alt="foto 1"/>
                <img src={foto2} alt="foto 2"/>
                <img src={foto3} alt="foto 4"/>
            </div> 
        </div>
        <div className="ntdiv">
            <div className="tx">
                <h3 className="rubik-h3">Planes para corporativos e instituciones</h3>
                <p className="rubik-p">Nuestros planes de internet para instituciones, empresas, y profesionales están diseñados para ofrecer soluciones de conectividad robustas y confiables que se adapten a las exigencias del entorno laboral moderno. Entendemos que en un mundo cada vez más digital, la velocidad y estabilidad de la conexión son fundamentales para el éxito de cualquier organización. Ya sea que necesites un plan que soporte la operación diaria de una empresa con múltiples empleados, o que busques una solución especializada para instituciones educativas, contamos con opciones que garantizan un rendimiento óptimo. Nuestra infraestructura avanzada asegura que puedas manejar grandes volúmenes de datos, realizar videoconferencias de alta calidad, y mantener sistemas en línea sin interrupciones.</p>
                <p className="rubik-p">Para las empresas que dependen del comercio electrónico y la comunicación en tiempo real, nuestros planes empresariales ofrecen velocidades ultrarrápidas y una alta capacidad de ancho de banda. Estos planes están diseñados para soportar múltiples conexiones simultáneas, lo que permite a las organizaciones operar de manera eficiente sin temor a caídas en el servicio. Además, proporcionamos opciones de personalización para adaptarnos a las necesidades específicas de cada empresa, incluyendo soporte técnico prioritario, soluciones de seguridad avanzadas, y la posibilidad de escalar la conexión a medida que tu negocio crece. Nuestro compromiso es asegurarte que, independientemente del tamaño de tu empresa, siempre estarás conectado con tus clientes, proveedores, y equipos de trabajo.</p>
                <p className="rubik-p">Los profesionales que trabajan de manera independiente también pueden beneficiarse de nuestros planes diseñados para brindarles la mejor experiencia en sus actividades diarias. Ya sea que trabajes desde casa o desde una oficina privada, entendemos que necesitas una conexión que sea tan confiable como tú. Con nuestros planes para profesionales, obtendrás no solo velocidad y estabilidad, sino también flexibilidad para adaptarte a los diferentes desafíos de tu labor. Además, ofrecemos herramientas que facilitan la gestión de tu red, garantizando que siempre cuentes con el respaldo técnico necesario para mantenerte productivo y enfocado en lo que realmente importa: hacer crecer tu carrera o negocio.</p>
            </div>
            <div className="gallery"
            style={{gap:"35px"}}>
                <img src={foto4} alt="foto 1"/>
                <img src={foto5} alt="foto 2"/>
                <img src={foto6} alt="foto 4"/>
            </div> 
        </div> 
</main>
    )
}