'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Target, 
  Calendar, 
  Clock
} from 'lucide-react';
import Printer from '@/components/Printer';

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const features = [
    { 
      icon: Zap, 
      title: "Lightning Fast", 
      description: "Print up to 10x faster than traditional 3D printers",
      stat: "300mm/s"
    },
    { 
      icon: Target, 
      title: "Precision Engineering", 
      description: "Micron-level accuracy for perfect prints every time",
      stat: "0.05mm"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {isMounted && [...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              opacity: [0.2, 0.6, 0.2],
              x: [0, (Math.random() - 0.5) * 50, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="mb-4 text-orange-400 border-orange-400">
            REVOLUTIONIZING MANUFACTURING
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            ApexForm          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Instant Quotes. Precision Manufacturing.
          </p>
        </motion.div>
      </div>

      {/* Interactive Feature Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 z-10 w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFeature(index)}
          >
            <Card className={`h-full cursor-pointer transition-all duration-300 ${
              activeFeature === index 
                ? 'bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500 shadow-lg' 
                : 'bg-gray-800/50 border-gray-700 hover:border-orange-400'
            }`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <feature.icon className={`w-8 h-8 ${
                    activeFeature === index ? 'text-orange-400' : 'text-gray-400'
                  }`} />
                  <span className={`text-2xl font-bold ${
                    activeFeature === index ? 'text-orange-400' : 'text-gray-500'
                  }`}>
                    {feature.stat}
                  </span>
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${
                  activeFeature === index ? 'text-white' : 'text-gray-300'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-sm ${
                  activeFeature === index ? 'text-gray-300' : 'text-gray-400'
                }`}>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* 3D Printer Visualization */}
      <motion.div 
        className="w-full max-w-4xl flex flex-col items-center mb-12 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {/* Animated Coming Soon Text */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Calendar className="w-6 h-6 text-orange-400" />
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Coming Soon
            </motion.h2>
            <Clock className="w-6 h-6 text-orange-400" />
          </div>
          
          <motion.div
            className="h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full w-32 mx-auto mb-3"
            animate={{
              scaleX: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <p className="text-gray-400 text-sm">Expected Launch: Q4 2025</p>
        </motion.div>

        <motion.div
          animate={{ 
            scale: isHovering ? 1.05 : 1,
            rotateY: isHovering ? 5 : 0
          }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer relative group"
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
        >
          <div className="absolute -inset-4 bg-orange-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Printer />
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div 
        className="text-center text-gray-500 text-sm z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <p>© 2025 ApexForm Labs. All rights reserved.</p>
      </motion.div>
    </div>
  );
}
