import { Home, LineChart, Package, PanelBottom, Settings, SquareActivity, Text, Users } from "lucide-react"
import { Button } from "../ui/button"
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"

export function Sidebar() {
    return (
        <div className="flex w-full flex-col bg-muted/55">
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
                <nav className="flex flex-col items-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Link
                            href="#"
                            className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full"

                        >
                            <Package className="h-4 w-4" />

                        </Link>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rouned-lg text-muted-foreground trasition-colors hover:text-foreground"
                                >
                                    <Home className="h-5 w-5" />

                                </Link>

                            </TooltipTrigger>
                            <TooltipContent side="right">Downloads</TooltipContent>
                        </Tooltip>


                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rouned-lg text-muted-foreground trasition-colors hover:text-foreground"
                                >
                                    <SquareActivity className="h-5 w-5" />

                                </Link>

                            </TooltipTrigger>
                            <TooltipContent side="right">Equipe</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rouned-lg text-muted-foreground trasition-colors hover:text-foreground"
                                >
                                    <Text className="h-5 w-5" />

                                </Link>

                            </TooltipTrigger>
                            <TooltipContent side="right">Squads</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rouned-lg text-muted-foreground trasition-colors hover:text-foreground"

                                >
                                    <LineChart className="h-5 w-5" />

                                </Link>

                            </TooltipTrigger>
                            <TooltipContent side="right">Programas</TooltipContent>
                        </Tooltip>

                    </TooltipProvider>

                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rouned-lg text-muted-foreground trasition-colors hover:text-foreground"

                                >
                                    <Settings className="h-5 w-5 text-red-500" />

                                </Link>

                            </TooltipTrigger>
                            <TooltipContent side="right">Config</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>

            <div className=" sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm-bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelBottom className='w-5 h-5' />
                                <span className="sr-only">Abrir/ fechar menu</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="left" className="sm:max-w-x">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="flex h-10 w-10 bg-primary rounded-full text-lg flex items-center justify-center text-primary-foreground md:text-base gap-2"
                                    prefetch={false}

                                >
                                    <Package className="h-5 w-5 transition-all" />
                                    <span className="sr-only"> logo</span>
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false} >

                                    <Home className="h-5 w-5 transition-all" />
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false} >

                                    <SquareActivity className="h-5 w-5 transition-all" /> Downloads
                                </Link>


                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false} >

                                    <Text className="h-5 w-5 transition-all" /> Squads
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false} >

                                    <LineChart className="h-5 w-5 transition-all" /> Projetos
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false} >

                                    <Users className="h-5 w-5 transition-all" /> Equipe
                                </Link>

                            </nav>
                        </SheetContent>
                    </Sheet>
                    <h2>Menu</h2>
                </header>
            </div>
        </div>
    )
}