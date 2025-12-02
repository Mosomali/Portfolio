"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import {
  personalInfo,
  languageSkills,
  skills,
  experience,
  education,
  projects,
  certifications,
} from "@/lib/data";

export default function CV() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Download Button - Hidden when printing */}
      <div className="fixed top-4 right-4 z-50 print:hidden">
        <motion.button
          onClick={handleDownload}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-white rounded-full font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all"
        >
          <Download className="w-5 h-5" />
          Download CV
        </motion.button>
      </div>

      {/* CV Content */}
      <div className="max-w-4xl mx-auto p-8 bg-card print:bg-white print:p-4">
        {/* Header */}
        <header className="mb-8 pb-6 border-b-2 border-orange-500">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent print:text-black">
            {personalInfo.name}
          </h1>
          <p className="text-xl text-muted-foreground mb-4 print:text-gray-600">
            {personalInfo.title}
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <p><span className="font-semibold">ID:</span> {personalInfo.id}</p>
            <p><span className="font-semibold">Nationality:</span> {personalInfo.nationality}</p>
            <p><span className="font-semibold">Date of Birth:</span> {personalInfo.dateOfBirth}</p>
            <p><span className="font-semibold">Place of Birth:</span> {personalInfo.placeOfBirth}</p>
            <p><span className="font-semibold">Phone:</span> {personalInfo.phone}</p>
            <p><span className="font-semibold">Email:</span> {personalInfo.email}</p>
            <p className="col-span-2"><span className="font-semibold">Address:</span> {personalInfo.location}</p>
          </div>
        </header>

        {/* Language Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-500 print:text-black">
            Language Skills
          </h2>
          {languageSkills.map((lang) => (
            <div key={lang.language} className="mb-3">
              <h3 className="font-semibold text-lg">
                {lang.language === "Somali" ? `Mother tongue: ${lang.language}` : `Other language: ${lang.language}`}
              </h3>
              {lang.listening && (
                <div className="grid grid-cols-5 gap-2 text-sm mt-2">
                  <p><span className="font-medium">Listening:</span> {lang.listening}</p>
                  <p><span className="font-medium">Reading:</span> {lang.reading}</p>
                  <p><span className="font-medium">Writing:</span> {lang.writing}</p>
                  <p className="col-span-2"><span className="font-medium">Spoken Production:</span> {lang.spokenProduction}</p>
                  <p className="col-span-5"><span className="font-medium">Spoken Interaction:</span> {lang.spokenInteraction}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-500 print:text-black">
            Work Experience
          </h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <h3 className="font-semibold text-lg">{exp.company}</h3>
              <p className="text-sm text-muted-foreground print:text-gray-600">
                {exp.location} | {exp.period}
              </p>
              <p className="font-medium mt-1">{exp.role}</p>
              <p className="text-sm mt-2">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Education and Training */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-500 print:text-black">
            Education and Training
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <h3 className="font-semibold text-lg">{edu.degree}</h3>
              <p className="font-medium">{edu.institution}</p>
              <p className="text-sm text-muted-foreground print:text-gray-600">
                {edu.location} | {edu.period}
              </p>
              {edu.website && (
                <p className="text-sm">Website: {edu.website}</p>
              )}
              {edu.field && (
                <p className="text-sm">Field: {edu.field}</p>
              )}
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-500 print:text-black">
            Skills
          </h2>
          {["Networking Skills", "Security & Tools", "Operating Systems", "Programming", "Design"].map((category) => {
            const categorySkills = skills.filter((s) => {
              if (category === "Programming" || category === "Design") {
                return s.category === category;
              }
              return s.category === category;
            });
            
            if (categorySkills.length === 0) return null;
            
            return (
              <div key={category} className="mb-4">
                <h3 className="font-semibold text-lg mb-2">{category}</h3>
                <p className="text-sm">
                  {categorySkills.map((s) => s.name).join(" / ")}
                </p>
              </div>
            );
          })}
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-500 print:text-black">
            Projects
          </h2>
          {projects.map((project) => (
            <div key={project.id} className="mb-4">
              <h3 className="font-semibold text-lg">{project.title}</h3>
              <p className="text-sm mt-2">{project.longDescription}</p>
              {project.liveUrl && (
                <p className="text-sm mt-1">Link: {project.liveUrl}</p>
              )}
              {project.githubUrl && !project.liveUrl && (
                <p className="text-sm mt-1">Link: {project.githubUrl}</p>
              )}
            </div>
          ))}
        </section>

        {/* Certifications */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-500 print:text-black">
            Certifications
          </h2>
          {certifications.map((cert) => (
            <div key={cert.id} className="mb-4">
              <h3 className="font-semibold text-lg">{cert.name}</h3>
              <p className="text-sm text-muted-foreground print:text-gray-600">
                {cert.issuer} | {cert.date}
              </p>
              <p className="text-sm">Mode of learning: {cert.mode}</p>
              {cert.description && (
                <p className="text-sm mt-1">{cert.description}</p>
              )}
            </div>
          ))}
        </section>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          @page {
            margin: 1cm;
          }
        }
      `}</style>
    </div>
  );
}
