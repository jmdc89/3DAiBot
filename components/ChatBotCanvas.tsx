'use client'

import { OrbitControls, useGLTF} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Head = () => {
    const model = useGLTF("head.glb");
    console.log(model);
    return < primitive object={model.scene} scale={3} />
}

const ChatBotCanvas = () => {
    return (
    <Canvas>
        <OrbitControls />
        <ambientLight />
        <Head />
    </Canvas>
    );
}

export default ChatBotCanvas;