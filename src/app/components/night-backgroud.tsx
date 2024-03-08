'use client'

import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export default function NightBackground () {
  const [init, setInit] = useState(false)
  const myRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    initParticlesEngine(async engine => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine)
      //await loadBasic(engine);
    }).then(() => {
      setInit(true)
    })
  }, [])

  useEffect(() => {
    if (myRef.current && document) {
      document.addEventListener('mousemove', handleHover)
    }

    return () => {
      if (myRef.current && document) {
        document.removeEventListener('mousemove', handleHover)
      }
    }
  }, [myRef.current])

  function handleHover (event: MouseEvent) {
    const { clientX, clientY, currentTarget } = event
    if (currentTarget) {
      const horizontal = (clientX / 200) * -1
      const vertical = (clientY / 200) * -1

      if (myRef.current) {
        myRef.current.style.transform = `translateX(${horizontal}px) translateY(${vertical}px)`
      }
    }
  }

  return (
    <div ref={myRef} className='fixed size-full'>
      {init && (
        <Particles
          id='tsparticles'
          // particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: 'var(--background)'
              }
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push'
                },
                // onHover: {
                //   enable: true,
                //   mode: "repulse",
                // },
                resize: {
                  enable: true
                }
              },
              modes: {
                push: {
                  quantity: 1
                }
              }
            },
            particles: {
              color: {
                value: '#e6e6e9'
              },
              links: {
                color: '#e6e6e9',
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1
              },
              move: {
                direction: 'right',
                enable: true,
                random: false,
                speed: 0.05,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  height: 1500,
                  width: 1500
                },
                value: 80
              },
              opacity: {
                value: {
                  min: 0.3,
                  max: 0.7
                },
                animation: {
                  startValue: 'random',
                  enable: true,
                  mode: 'random',
                  speed: 1
                }
              },
              shape: {
                type: 'circle'
              },
              size: {
                value: { min: 1, max: 1.2 }
              }
            },
            detectRetina: true
          }}
        />
      )}
    </div>
  )
}
