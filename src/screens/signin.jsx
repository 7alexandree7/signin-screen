import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons"

import amico from '../assets/amico.svg';
import bro from '../assets/bro.svg';
import cuate from '../assets/cuate.svg';
import pana from '../assets/pana.svg';
import rafiki from '../assets/rafiki.svg';

export function Signin() {

    const arrayImgLoop = [
        amico,
        bro,
        cuate,
        pana,
        rafiki
    ]

    return (
        <>
            <main className="h-screen w-full flex">
                <div className="bg-primary-foreground w-full h-full flex justify-center items-center p-16" >
                    <Carousel className='w-full max-w-xl'>
                        <CarouselContent>
                            {arrayImgLoop.map((imgItem, index) => (
                                <CarouselItem key={index}>
                                    <div className="flex aspect-square bg-background rounded p-8">
                                        <img src={imgItem} alt="" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <section className="flex justify-center items-center bg-background h-full max-w-3xl w-full p-4">
                    <Card className='w-full max-w-md'>
                        <CardHeader>
                            <CardTitle className='text-2xl font-bold tracking-tighter'>Entre com sua conta</CardTitle>
                            <CardDescription>Utilize seu e-mail e senha ou o Github para entrar.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div>
                                <label htmlFor="email">E-mail</label>
                                <Input id='email' placeholder='exemplo@gmail.com' type='email' />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="password">Senha</label>
                                <Input id='password' type='password' />
                            </div>
                            <Button className='mt-6 w-full'>Entrar</Button>
                            <div className="flex items-center gap-6 mt-4">
                                <Separator />
                                <span className="text-xs text-muted-foreground">OU</span>
                                <Separator />
                            </div>
                            <Button variant='outline' className='mt-4 w-full'> <GitHubLogoIcon className='mr-2' /> Entrar com o Github</Button>
                        </CardContent>
                        <CardFooter>
                            <p className="text-muted-foreground text-center text-sm">Ao entrar em nossa plataforma você concorda com nossos termos de uso e politica de privacidade</p>
                        </CardFooter>
                    </Card>
                </section>
            </main>
        </>
    )
}