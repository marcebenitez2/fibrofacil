import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactForm from "@/shared/components/ContactForm";

export default function AboutPage() {
  return (
    <main className="flex-grow">
      <section className="bg-[#8D6E63] text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Sobre MaderaPremium</h1>
          <p className="text-xl mb-8">
            Pasión por la madera, compromiso con la calidad
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#3E2723]">
              Nuestra Historia
            </h2>
            <p className="text-gray-700 mb-4">
              Fundada en 1985, MaderaPremium nació de la pasión por la madera y
              el compromiso con la excelencia. Comenzamos como un pequeño taller
              familiar y hemos crecido hasta convertirnos en un referente en el
              sector de la madera de alta calidad.
            </p>
            <p className="text-gray-700 mb-4">
              A lo largo de los años, hemos perfeccionado nuestras técnicas y
              ampliado nuestra gama de productos, siempre manteniendo nuestro
              compromiso con la sostenibilidad y la calidad.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Taller de MaderaPremium"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#D7CCC8]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#3E2723]">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Calidad",
                description:
                  "Seleccionamos las mejores maderas y aplicamos técnicas de vanguardia.",
              },
              {
                title: "Sostenibilidad",
                description:
                  "Nos comprometemos con prácticas responsables y sostenibles.",
              },
              {
                title: "Innovación",
                description:
                  "Buscamos constantemente nuevas formas de mejorar nuestros productos.",
              },
            ].map((value) => (
              <Card key={value.title} className="bg-white">
                <CardHeader>
                  <CardTitle className="text-[#3E2723]">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#3E2723]">
            Preguntas Frecuentes
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-2xl mx-auto"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Qué tipos de madera ofrecen?</AccordionTrigger>
              <AccordionContent>
                Ofrecemos una amplia variedad de maderas, incluyendo roble,
                nogal, cerezo, pino, y muchas más. Nuestro catálogo incluye
                tanto maderas duras como blandas, adecuadas para diferentes
                proyectos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                ¿Realizan envíos internacionales?
              </AccordionTrigger>
              <AccordionContent>
                Sí, realizamos envíos a nivel internacional. Los costos y
                tiempos de envío varían según el destino. Contacta con nuestro
                equipo de atención al cliente para obtener más detalles.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                ¿Ofrecen servicios de corte personalizado?
              </AccordionTrigger>
              <AccordionContent>
                Efectivamente, ofrecemos servicios de corte a medida. Puedes
                especificar las dimensiones exactas que necesitas y nuestro
                equipo de expertos se encargará de preparar tu pedido.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <ContactForm />
    </main>
  );
}
