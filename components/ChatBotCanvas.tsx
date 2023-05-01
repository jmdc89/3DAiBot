'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Head = () => {
    return null
}

const ChatBotCanvas = () => {
    return (
    <Canvas>
        <OrbitControls />
        <mesh>
            <boxGeometry />
        </mesh>
        <Head />
    </Canvas>
    );
}

export default ChatBotCanvas;