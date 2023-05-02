'use client'

import { OrbitControls, useAnimations, useGLTF} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Head = () => {
    const model = useGLTF("head.glb");
    const animations = useAnimations(model.animations, model.scene);
	const action = animations.actions.Animation;
    return < primitive object={model.scene} scale={3} />
}

const ChatBotCanvas = () => {
    return (
    <Canvas>
        <OrbitControls
				enableZoom={false}
				enableDamping
				maxPolarAngle={2}
				minAzimuthAngle={-Math.PI * 0.5}
				maxAzimuthAngle={Math.PI * 0.5}
			/>
        <ambientLight />
        <Head />
    </Canvas>
    );
}

export default ChatBotCanvas;