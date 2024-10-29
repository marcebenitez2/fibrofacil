"use client";
import { Button } from "@/components/ui/button";
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
import React from "react";

const ContactForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <section className="py-16 bg-[#D7CCC8]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#3E2723]">
          Contáctanos
        </h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Envíanos tu consulta</CardTitle>
            <CardDescription>
              Estaremos encantados de responder a tus preguntas.
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
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea id="mensaje" required className="min-h-[100px]" />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white"
              >
                Enviar Mensaje
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
