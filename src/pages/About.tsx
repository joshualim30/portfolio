import React from 'react';
import { motion } from "framer-motion";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

const About: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className='min-h-screen w-full flex flex-col px-4 py-8'>
            <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-foreground mb-4">About Me</h1>
                    <p className="text-default-500 max-w-2xl mx-auto">
                        I'm a passionate software engineer with a focus on creating elegant solutions to complex problems.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <motion.div variants={itemVariants}>
                        <Card className="h-full">
                            <CardHeader className="flex gap-3">
                                <div className="flex flex-col">
                                    <p className="text-xl font-semibold text-foreground">Background</p>
                                    <p className="text-default-500">My journey in software development</p>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <p className="text-default-600">
                                    I started my journey in software development with a strong foundation in computer science.
                                    My experience spans across various technologies and domains, allowing me to build
                                    comprehensive solutions that meet real-world needs.
                                </p>
                            </CardBody>
                        </Card>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Card className="h-full">
                            <CardHeader className="flex gap-3">
                                <div className="flex flex-col">
                                    <p className="text-xl font-semibold text-foreground">Skills</p>
                                    <p className="text-default-500">Technical expertise</p>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <ul className="list-disc list-inside text-default-600 space-y-2">
                                    <li>Full-stack development</li>
                                    <li>Cloud architecture</li>
                                    <li>System design</li>
                                    <li>Agile methodologies</li>
                                    <li>Team leadership</li>
                                </ul>
                            </CardBody>
                        </Card>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Card className="h-full">
                            <CardHeader className="flex gap-3">
                                <div className="flex flex-col">
                                    <p className="text-xl font-semibold text-foreground">Interests</p>
                                    <p className="text-default-500">What drives me</p>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <p className="text-default-600">
                                    I'm passionate about creating innovative solutions that make a difference.
                                    I enjoy learning new technologies and sharing knowledge with others in the
                                    developer community.
                                </p>
                            </CardBody>
                        </Card>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Card className="h-full">
                            <CardHeader className="flex gap-3">
                                <div className="flex flex-col">
                                    <p className="text-xl font-semibold text-foreground">Goals</p>
                                    <p className="text-default-500">Future aspirations</p>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <p className="text-default-600">
                                    My goal is to continue growing as a software engineer while contributing to
                                    meaningful projects. I aim to mentor others and help build a more inclusive
                                    tech community.
                                </p>
                            </CardBody>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About; 