'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const ChatBotCanvas = () => {
    return (
    <Canvas>
        <OrbitControls />
        <mesh>
            <boxGeometry />
        </mesh>
    </Canvas>
    );
}

export default ChatBotCanvas;