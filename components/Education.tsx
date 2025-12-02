"use client";

import { motion } from "framer-motion";
import { education, certifications } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-muted-foreground">
            My academic background and professional certifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="text-primary">🎓</span> Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-lg border shadow-sm"
                >
                  <h4 className="text-lg font-bold">{edu.degree}</h4>
                  <p className="text-primary">{edu.institution}</p>
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>
                  {edu.field && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Field: {edu.field}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="text-primary">🏆</span> Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-lg border shadow-sm"
                >
                  <h4 className="text-lg font-bold">{cert.name}</h4>
                  <p className="text-primary">{cert.issuer}</p>
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>{cert.date}</span>
                    <span>{cert.mode}</span>
                  </div>
                  {cert.description && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {cert.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
