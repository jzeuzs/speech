"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
    ArrowDown,
    ArrowUpRight,
    ChevronRight,
    Disc3,
    Headphones,
    Mail,
    Radio,
    Volume2,
    X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DitherShader } from "@/components/ui/dither-shader";

const elements = [
    {
        id: "01",
        label: "SOURCE / RECEIVER",
        title: "Who is speaking",
        copy: "The persona is the source of the confession, while the absent beloved is the intended receiver. In fact, each person can be both source and receiver. Here, the exchange never becomes mutual.",
        evidence: "“All this time, I have been yours”",
        icon: Radio,
    },
    {
        id: "02",
        label: "MESSAGE",
        title: "What is being said",
        copy: "The message is about a possible life, shaped by regret: what might have happened if the speaker had given in a little more?",
        evidence: "“Was there a lifetime waiting for us?”",
        icon: Mail,
    },
    {
        id: "03",
        label: "CONTEXT",
        title: "What surrounds it",
        copy: "The context (specifically social-psychological), is a familiar relationship that the speaker is scared to disturb. On the other hand, the temporal context is in itself retrospective. That is, the message is formed after the chance to send it has passed.",
        evidence: "“To the warmth we had before”",
        icon: Headphones,
    },
    {
        id: "04",
        label: "CHANNEL",
        title: "How it gets out",
        copy: "The feeling stayed internal. The song is the later channel, a public performance that artistically presents an internal monologue. The burning letters make that failed channel visible.",
        evidence: "“Smoke and ashes from these letters I’m burning”",
        icon: Disc3,
    },
    {
        id: "05",
        label: "NOISE",
        title: "What gets in the way",
        copy: "Psychological noise disrupts transmission before it begins. Fear of losing the relationship, self-doubt, anxiety, and the assumption that it is only an illusion turn the confession into silence.",
        evidence: "“I was scared to lose you then”",
        icon: Volume2,
    },
    {
        id: "06",
        label: "EFFECT",
        title: "What it leaves behind",
        copy: "The affective effect is grief. The speaker mourns a relationship that never became real. The listener is left with recognition rather than resolution.",
        evidence: "“How do you grieve for a love that did not even exist?”",
        icon: ArrowUpRight,
    },
];

function ElementCard({
    item,
    index,
}: {
    item: (typeof elements)[number];
    index: number;
}) {
    const Icon = item.icon;
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.06, duration: 0.65 }}
            className="group flex min-h-80 flex-col justify-between border-t border-border py-6"
        >
            <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                    {item.id}
                </span>
                <Icon
                    aria-hidden="true"
                    className="size-5 text-accent transition-transform duration-500 group-hover:rotate-12"
                    strokeWidth={1.25}
                />
            </div>
            <div className="flex flex-col gap-4">
                <span className="font-mono text-[10px] tracking-[.2em] text-accent">
                    {item.label}
                </span>
                <h3 className="font-serif text-3xl leading-none tracking-tight md:text-4xl">
                    {item.title}
                </h3>
                <p className="max-w-md text-sm leading-6 text-muted-foreground">
                    {item.copy}
                </p>
                <p className="border-l-2 border-accent pl-3 font-mono text-xs leading-5 text-foreground/80">
                    {item.evidence}
                </p>
            </div>
        </motion.article>
    );
}

export function LifetimePage() {
    const [opened, setOpened] = useState(false);
    const { scrollYProgress } = useScroll();
    const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <main className="overflow-hidden bg-background text-foreground">
            <motion.div
                style={{ width: progress }}
                className="fixed left-0 top-0 z-50 h-0.5 bg-accent"
            />
            <header className="absolute z-20 flex w-full items-center justify-between px-6 py-5 md:px-10">
                <span className="font-mono text-[10px] tracking-[.28em] text-primary-foreground">
                    Elements of Communication in a Song
                </span>
                <span className="font-mono text-[10px] tracking-[.2em] text-primary-foreground/80">
                    BEN & BEN
                </span>
            </header>

            <section className="relative flex min-h-svh items-end bg-primary px-6 pb-10 pt-24 text-primary-foreground md:px-10 md:pb-14">
                <div className="absolute inset-0 opacity-90">
                    <DitherShader
                        src="/cover.png"
                        gridSize={5}
                        pixelRatio={1.2}
                        colorMode="duotone"
                        primaryColor="#123a9b"
                        secondaryColor="#f4cf3a"
                        ditherMode="bayer"
                        animated
                        animationSpeed={0.008}
                        className="size-full"
                    />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/25 to-primary/5" />
                <div className="relative z-10 flex w-full flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-4xl">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mb-6 font-mono text-xs tracking-[.28em] text-accent"
                        >
                            Speech 30
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="font-serif text-[clamp(4.5rem,13vw,11rem)] leading-[.78] tracking-[-.07em]"
                        >
                            lifetime<span className="text-accent">.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-8 max-w-lg text-sm leading-6 text-primary-foreground italic"
                        >
                            Is it even worth it to reminisce?
                        </motion.p>
                    </div>
                </div>
                <div className="absolute bottom-5 right-6 hidden items-center gap-2 font-mono text-[10px] tracking-[.15em] text-primary-foreground/80 md:flex">
                    <ArrowDown
                        aria-hidden="true"
                        className="size-3 animate-bounce"
                    />{" "}
                    follow the message
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
                <div className="grid gap-12 md:grid-cols-[.7fr_1.3fr]">
                    <div>
                        <p className="font-mono text-xs tracking-[.25em] text-accent">
                            THE ANTECEDENT
                        </p>
                        <p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">
                            Communication has various elements: message,
                            context, source-receiver, feedback, channel, noise,
                            and effect. In this song, every element is there.
                            Except, the message was never{" "}
                            <span className="italic">communicated</span>.
                        </p>
                    </div>
                    <div>
                        <h2 className="max-w-4xl font-serif text-5xl leading-[.95] tracking-tight md:text-8xl">
                            The message was real. But,
                            <br />
                            <em className="text-accent">
                                the exchange was not.
                            </em>
                        </h2>
                    </div>
                </div>
            </section>

            <section className="border-y border-border bg-secondary/50 px-6 py-24 md:px-10 md:py-32">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 flex items-end justify-between">
                        <div>
                            <p className="font-mono text-xs tracking-[.25em] text-accent">
                                THE ELEMENTS
                            </p>
                            <h2 className="mt-4 font-serif text-5xl tracking-tight md:text-7xl">
                                Six parts of the exchange
                            </h2>
                        </div>
                    </div>
                    <div className="grid gap-x-10 md:grid-cols-2">
                        {elements.map((item, i) => (
                            <ElementCard key={item.id} item={item} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
                <div className="grid gap-14 md:grid-cols-2 md:items-center">
                    <div className="relative aspect-square overflow-hidden bg-primary">
                        <DitherShader
                            src="/8.jpg"
                            gridSize={7}
                            pixelRatio={1.4}
                            colorMode="duotone"
                            primaryColor="#f5d34b"
                            secondaryColor="#123a9b"
                            ditherMode="halftone"
                            className="size-full"
                        />
                        <span className="absolute left-5 top-5 font-mono text-[10px] tracking-[.2em] text-primary-foreground">
                            CHANNEL / THE SONG
                        </span>
                    </div>
                    <div>
                        <p className="font-mono text-xs tracking-[.25em] text-accent">
                            THE CHANNEL
                        </p>
                        <blockquote className="mt-7 font-serif text-4xl leading-[1.05] md:text-6xl">
                            “Smoke and ashes from these letters I&apos;m
                            burning.”
                        </blockquote>
                        <p className="mt-8 max-w-sm text-sm leading-6 text-muted-foreground">
                            The letters are never delivered. The song is their
                            way to finally let someone receive that letter.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-primary px-6 py-24 text-primary-foreground md:px-10 md:py-36">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 md:grid-cols-[1fr_.8fr]">
                        <div>
                            <p className="font-mono text-xs tracking-[.25em] text-accent">
                                THE EFFECT
                            </p>
                            <h2 className="mt-5 max-w-2xl font-serif text-6xl leading-[.88] tracking-tight md:text-9xl">
                                What changes when a feeling arrives late
                                <span className="text-accent">?</span>
                            </h2>
                        </div>
                        <div className="flex flex-col justify-end">
                            <p className="max-w-sm text-sm leading-6 text-primary-foreground">
                                The speaker cannot change the past. They can
                                only look back at it. They recognize the cost of
                                silence, a grief for a relationship that was
                                only imagined.
                            </p>
                            <Button
                                onClick={() => setOpened(!opened)}
                                variant="outline"
                                size="lg"
                                className="mt-8 w-fit border-primary-foreground/70 bg-transparent text-primary-foreground hover:bg-accent hover:text-accent-foreground"
                            >
                                {opened
                                    ? "CLOSE THE LETTER"
                                    : "READ THE LAST LINE"}{" "}
                                {opened ? (
                                    <X data-icon="inline-end" />
                                ) : (
                                    <ChevronRight data-icon="inline-end" />
                                )}
                            </Button>
                        </div>
                    </div>
                    <motion.div
                        initial={false}
                        animate={{
                            height: opened ? "auto" : 0,
                            opacity: opened ? 1 : 0,
                        }}
                        className="overflow-hidden"
                    >
                        <div className="mt-20 max-w-2xl border-l-2 border-accent pl-6 md:ml-auto md:mr-24">
                            <p className="font-serif text-3xl leading-tight md:text-5xl">
                                “Is there a lifetime waiting for us? All this
                                time, I have been yours.”
                            </p>
                            <p className="mt-5 font-mono text-[10px] tracking-[.2em] text-accent">
                                AFFECTIVE EFFECT
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
            <footer className="flex flex-col gap-4 border-t border-border px-6 py-8 font-mono text-[10px] tracking-[.16em] text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
                <span>LIFETIME (REIMAGINED)</span>
                <span>by Jezzu Morrisen C. Quimosing | Speech 30 THZ</span>
                <span>BEN & BEN</span>
            </footer>
        </main>
    );
}

export default LifetimePage;
