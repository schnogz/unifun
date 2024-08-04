import { Card } from '@mui/joy'
import classNames from 'classnames'
import { useEffect, useRef } from 'react'

import { UnifunNft } from '@/assets/UnifunNft'
import { MintStatus } from '@/types/mint'

export default function NftMintCard({ mintStatus }: { mintStatus: MintStatus }) {
  const initialAnimateRef = useRef<SVGAnimateElement | null>(null)
  const bounceAnimateRef = useRef<SVGAnimateElement | null>(null)

  useEffect(() => {
    // start mint progress SVGs
    if (mintStatus === MintStatus.PENDING_MINT) {
      if (initialAnimateRef.current) {
        initialAnimateRef.current?.beginElement()
      }
      setTimeout(() => {
        if (bounceAnimateRef.current) {
          bounceAnimateRef.current?.beginElement()
        }
      }, 15_000)
    }

    // hide mint progress SVGs and refetch recent mints upon new mint completion
    if (mintStatus === MintStatus.COMPLETED) {
      if (initialAnimateRef.current) {
        initialAnimateRef.current?.endElement()
      }
      if (bounceAnimateRef.current) {
        bounceAnimateRef.current?.endElement()
      }
    }
  }, [mintStatus])

  return (
    <Card
      className={classNames({ 'mint-complete-bg': mintStatus === MintStatus.COMPLETED })}
      variant='plain'
      sx={{
        borderRadius: 0,
        height: '250px',
        mb: 1,
        p: 0,
        width: '250px',
        'z-index': 999,
      }}
    >
      <div className='mint-overlay-container'>
        <UnifunNft isMinting={mintStatus === MintStatus.PENDING_MINT} />
        <svg
          width='250'
          height='250'
          viewBox='0 0 250 250'
          xmlns='http://www.w3.org/2000/svg'
          style={{ display: mintStatus === MintStatus.PENDING_MINT ? 'inline' : 'none' }}
        >
          <defs>
            <mask id='mask'>
              <rect x='0' y='0' width='250' height='250' rx='46' fill='#fff' />
            </mask>
          </defs>
          <rect
            x='0'
            y='0'
            width='250'
            height='250'
            rx='46'
            fill='none'
            stroke='#FC72FF'
            strokeWidth='18'
            mask='url(#mask)'
            strokeDasharray='1060'
            strokeDashoffset='1060'
          >
            {/* normal progress bar up until about 85% complete until freeze */}
            <animate
              ref={initialAnimateRef}
              attributeName='stroke-dashoffset'
              begin='indefinite'
              from='1060'
              to='212'
              dur='15s'
              fill='freeze'
            />
            {/* if mint is not complete yet, animate another progress bar near that bounces near completion */}
            <animate
              ref={bounceAnimateRef}
              attributeName='stroke-dashoffset'
              begin='indefinite'
              values='212; 191; 212'
              keyTimes='0; 0.25; 1'
              dur='1s'
              repeatCount='indefinite'
            />
          </rect>
        </svg>
      </div>
    </Card>
  )
}
