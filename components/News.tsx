"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { newsEvents } from "@/lib/data";
import { Calendar, ExternalLink } from "lucide-react";

export default function News() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="news" className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Latest <span className="text-gradient">News & Events</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with my latest achievements, events, and announcements
          </p>
        </motion.div>

        {/* News Content */}
        {newsEvents.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center py-16"
          >
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-2xl font-semibold mb-2">No news available yet</h3>
              <p className="text-muted-foreground">Check back soon for updates!</p>
            </div>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsEvents.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Category Badge */}
                {item.category && (
                  <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 mb-3">
                    <span className="text-xs font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                      {item.category}
                    </span>
                  </div>
                )}

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(item.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>

                {/* Link */}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-yellow-500 transition-colors"
                  >
                    Read more
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
