'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Printer() {
  const [isPrinting, setIsPrinting] = useState(true);
  const [temperature, setTemperature] = useState(285);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const togglePrinting = () => {
    setIsPrinting(!isPrinting);
  };

  return (
    <div className="relative w-96 h-80">
      {/* Frame */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl border-2 border-gray-700 shadow-2xl">
        {/* Side Vents */}
        <div className="absolute top-10 left-0 w-4 h-32 bg-gray-900 rounded-r-lg flex flex-col justify-around px-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="h-1 bg-gray-700 rounded-full"
              animate={{
                opacity: isPrinting ? [0.3, 1, 0.3] : 0.3,
                scaleX: isPrinting ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
        
        {/* Z-Axis Rods */}
        <div className="absolute top-4 left-8 w-1 h-64 bg-gradient-to-b from-gray-600 to-gray-500 rounded-full shadow-lg"></div>
        <div className="absolute top-4 right-8 w-1 h-64 bg-gradient-to-b from-gray-600 to-gray-500 rounded-full shadow-lg"></div>
        
        {/* Print Head Assembly */}
        <motion.div 
          className="absolute top-20 left-16 right-16 h-16 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg flex items-center justify-center cursor-pointer"
          animate={{
            x: isPrinting ? [0, 40, 0, -40, 0] : 0,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onClick={togglePrinting}
        >
          {/* Heat Sink */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-8 bg-gradient-to-b from-gray-500 to-gray-600 rounded-sm"
                animate={{
                  opacity: isPrinting ? [0.5, 1, 0.5] : 0.5,
                  scaleY: isPrinting ? [1, 1.1, 1] : 1,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
          
          {/* Nozzle */}
          <motion.div 
            className="w-4 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-t-lg shadow-lg"
            animate={{
              y: isPrinting ? [0, -2, 0] : 0,
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
            }}
          >
            {/* Nozzle glow effect */}
            <motion.div
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-orange-400 rounded-full blur-sm"
              animate={{
                opacity: isPrinting ? [0.3, 0.8, 0.3] : 0.3,
                scale: isPrinting ? [1, 1.3, 1] : 1,
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </motion.div>
        
        {/* Print Bed */}
        <div className="absolute bottom-8 left-8 right-8 h-2 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg shadow-inner">
          <div className="absolute inset-0 bg-grid-pattern bg-repeat bg-[length:8px_8px] opacity-30"></div>
        </div>
        
        {/* Growing Print - COMING SOON Text */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-48 h-32">
          {/* Base print layer */}
          <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-orange-600 to-orange-400">
            <div className="absolute inset-0 bg-layer-lines bg-repeat-y bg-[length:100%_2px] opacity-30"></div>
          </div>
          
          {/* Animated print growth */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-600 to-orange-400 overflow-hidden"
            animate={{
              height: isPrinting ? [0, 32, 32] : 32,
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="absolute inset-0 bg-layer-lines bg-repeat-y bg-[length:100%_2px] opacity-30"></div>
            
            {/* COMING SOON Text - appears as it prints */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                opacity: isPrinting ? [0, 1, 1] : 1,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <motion.span 
                className="text-white font-bold text-lg tracking-wider"
                animate={{
                  textShadow: isPrinting ? 
                    ["0 0 5px rgba(255,255,255,0.5)", "0 0 20px rgba(255,255,255,0.8)", "0 0 30px rgba(255,255,255,1)"] : 
                    "0 0 10px rgba(255,255,255,0.5)",
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                COMING SOON
              </motion.span>
            </motion.div>
            
            {/* Glow effect that intensifies as it prints */}
            <motion.div
              className="absolute inset-0 bg-orange-400 rounded-lg blur-md"
              animate={{
                opacity: isPrinting ? [0, 0.6, 0.6] : 0.6,
                scale: isPrinting ? [0.8, 1, 1] : 1,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
          
          {/* Print head shadow effect */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1 bg-gray-900 rounded-full opacity-50"
            animate={{
              top: isPrinting ? ["0%", "100%", "100%"] : "100%",
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
        
        {/* Floating Particles */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-20 h-20">
          {isMounted && [...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full"
              animate={{
                y: isPrinting ? [0, -80, -80] : 0,
                opacity: isPrinting ? [0, 0.7, 0] : 0,
                x: isPrinting ? [0, (Math.random() - 0.5) * 40] : 0,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
              }}
              style={{
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        {/* Filament Spool */}
        <motion.div 
          className="absolute top-4 right-4 w-16 h-16 rounded-full border-4 border-gray-600 flex items-center justify-center"
          animate={{
            rotate: isPrinting ? 360 : 0,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-10 h-10 rounded-full border-2 border-gray-500"></div>
          <motion.div 
            className="absolute w-2 h-20 bg-gradient-to-b from-orange-400 to-orange-300 top-1/2 left-1/2 transform -translate-y-1/2 origin-top"
            animate={{
              rotate: isPrinting ? [0, 180] : 0,
              translateY: isPrinting ? [0, 80] : 0,
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
        
        {/* Control Panel */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg border border-gray-700 flex flex-col items-center justify-center p-2 shadow-lg">
          <motion.div 
            className="text-green-400 text-xs font-mono font-bold"
            animate={{
              color: isPrinting ? ["#22c55e", "#16a34a", "#22c55e"] : "#22c55e",
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            {temperature}°C
          </motion.div>
          <div className="flex space-x-1 mt-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === 0 ? 'bg-green-500' : i === 1 ? 'bg-blue-500' : 'bg-yellow-500'
                }`}
                animate={{
                  opacity: isPrinting ? [0.3, 1, 0.3] : 0.3,
                  scale: isPrinting ? [1, 1.3, 1] : 1,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Status indicator */}
        <div className="absolute top-2 right-2">
          <motion.div
            className={`w-3 h-3 rounded-full ${
              isPrinting ? 'bg-green-500' : 'bg-yellow-500'
            }`}
            animate={{
              scale: isPrinting ? [1, 1.2, 1] : 1,
              opacity: isPrinting ? [0.7, 1, 0.7] : 0.7,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          />
        </div>
      </div>
      
      {/* Interactive hint */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 text-center"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Click the printer to {isPrinting ? 'pause' : 'start'} printing
      </motion.div>
    </div>
  );
}
