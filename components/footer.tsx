"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useRef } from "react";

export function Footer() {
    const emailRef = useRef(null);
    async function handleSubscribe(e: any) {
        e.preventDefault();
        e.target.elements.Submit.disabled = true;
        const response = await fetch("/api/subscribe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: emailRef.current.value }),
        });
        const json = await response.json();
        console.log(json);
        e.target.reset();
        e.target.elements.Submit.disabled = false;
    }
    return (
        <footer className="bg-slate-50 border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="font-bold text-xl text-primary flex items-center"
                        >
                            <span>Raihan Firoz</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Specialized in full-stack development, business
                            process automation, and AI integration.
                        </p>
                        <div className="flex space-x-4">
                            <Button variant="ghost" size="icon" asChild>
                                <Link
                                    href="https://github.com/ra89fi"
                                    aria-label="GitHub"
                                    target="_blank"
                                >
                                    <Github className="h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link
                                    href="https://bd.linkedin.com/in/raihanfiroz?trk=people-guest_people_search-card"
                                    aria-label="LinkedIn"
                                    target="_blank"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link
                                    href="https://twitter.com/@ra89fi"
                                    aria-label="Twitter"
                                    target="_blank"
                                >
                                    <Twitter className="h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link
                                    href="mailto:rfiroz.work@gmail.com"
                                    aria-label="Email"
                                >
                                    <Mail className="h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium text-base mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/portfolio"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium text-base mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/services#full-stack"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Full-Stack Development
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services#automation"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Business Process Automation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services#ai-integration"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    AI Integration
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services#digital-transformation"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Digital Transformation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium text-base mb-4">
                            Stay Updated
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Subscribe to receive updates on automation trends
                            and new services.
                        </p>
                        <form onSubmit={handleSubscribe}>
                        <div className="flex space-x-2">
                            <Input
                                ref={emailRef}
                                type="email"
                                required
                                placeholder="Your email"
                                className="max-w-[220px]"
                            />
                            <Button size="sm" type="submit" name="Submit">
                                Subscribe
                            </Button>
                        </div>
                            </form>
                    </div>
                </div>

                <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} Raihan Firoz. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
