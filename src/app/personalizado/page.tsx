"use client";
import { AlertCircle, ChevronLeft } from "lucide-react";
import { Link } from "next-view-transitions";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CustomizedPage = () => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      if (selectedFile.type === "image/png") {
        setFile(selectedFile);
      } else {
        toast({
          title: "Formato de archivo incorrecto",
          description: "Por favor, sube solo imágenes PNG.",
          variant: "destructive",
        });
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    toast({
      title: "Pedido enviado",
      description:
        "Hemos recibido tu pedido personalizado. Nos pondremos en contacto contigo pronto.",
    });
  };
  return (
    <main className="flex-grow container mx-auto py-8">
      <div className="flex items-center mb-8">
        <Link
          href="/"
          className="text-[#3E2723] hover:underline flex items-center"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Volver al Inicio
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-8 text-[#3E2723]">
        Pedido Personalizado
      </h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Cuéntanos sobre tu proyecto</CardTitle>
          <CardDescription>
            Completa el formulario a continuación y nos pondremos en contacto
            contigo para discutir los detalles.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre</Label>
              <Input id="nombre" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono</Label>
              <Input id="telefono" type="tel" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mensaje">Descripción del proyecto</Label>
              <Textarea
                id="mensaje"
                placeholder="Describe tu proyecto y especifica las medidas necesarias..."
                required
                className="min-h-[150px]"
              />
              <p className="text-sm text-muted-foreground flex items-center">
                <AlertCircle className="h-4 w-4 mr-2" />
                No olvides incluir las medidas necesarias para tu proyecto.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="imagen">Subir imagen (PNG)</Label>
              <Input
                id="imagen"
                type="file"
                accept=".png"
                onChange={handleFileChange}
              />
              <p className="text-sm text-muted-foreground flex items-center">
                <AlertCircle className="h-4 w-4 mr-2" />
                Por favor, sube solo imágenes en formato PNG.
              </p>
            </div>
            <Button
              type="submit"
              className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white"
            >
              Enviar Pedido Personalizado
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default CustomizedPage;
