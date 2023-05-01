'use client'

import { Canvas } from '@react-three/fiber'
import React from 'react'

const ChatBotCanvas = () => {
    return (
    <Canvas>
        <mesh>
            <boxGeometry />
        </mesh>
    </Canvas>
    );
}

export default ChatBotCanvas;