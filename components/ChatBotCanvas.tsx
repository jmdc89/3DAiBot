'use client'

import { OrbitControls, useGLTF} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Head = () => {
    const model = useGLTF("head.glb");
    console.log(model);
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