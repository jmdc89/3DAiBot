'use client'

import { OrbitControls, useAnimations, useGLTF} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect } from 'react'

const Torch = () => {
    return null
}

const Head = () => {
    const model = useGLTF("head.glb");
    const animations = useAnimations(model.animations, model.scene);
	const action = animations.actions.Animation;
    useEffect(() => {
        // action?.play();
    },[action])

    return  (
        <>
            < primitive object={model.scene} scale={3} />
            <Torch />
        </>
    );
    
};

const ChatBotCanvas = () => {
    return (
        <Canvas style={{ pointerEvents: 'none' }}>
        <OrbitControls
				enableZoom={false}
				enableDamping
				maxPolarAngle={2}
				minAzimuthAngle={-Math.PI * 0.5}
				maxAzimuthAngle={Math.PI * 0.5}
			/>
        <ambientLight intensity={0.015} />
        <Head />
    </Canvas>
    );
}

export default ChatBotCanvas;