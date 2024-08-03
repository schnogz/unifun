import { SVGProps, useEffect, useState } from 'react'
type TSVGElementProps = SVGProps<SVGSVGElement>

export const UnifunNft = (props: TSVGElementProps & { isMinting?: boolean }) => {
  const [isClient, setIsClient] = useState<boolean>(false)

  // avoids nextJs client hydration warning
  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient ? (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={250}
      height={250}
      style={{
        background: 'transparent',
        clipRule: 'evenodd',
        fillRule: 'evenodd',
        filter: props.isMinting ? 'grayscale(1)' : '',
      }}
      viewBox='0 0 400 400'
    >
      <path
        fill='#fefefe'
        d='M66.5-.5h265c36.549 8.215 59.215 30.548 68 67v265c-8.215 36.549-30.548 59.215-67 68h-265c-36.549-8.215-59.215-30.548-68-67v-265c8.215-36.549 30.548-59.215 67-68Z'
        style={{
          opacity: 0.998,
        }}
      />
      <path
        fill='#ffdcd2'
        d='M282.5 31.5c10.239-1.295 18.073 2.371 23.5 11a42.174 42.174 0 0 0 5.5 11.5 470.828 470.828 0 0 1 17.5-5.5c12.609 1.442 19.775 8.442 21.5 21a218.818 218.818 0 0 1-5.5 18 4.458 4.458 0 0 0 1.5 2c18.878 4.758 24.711 16.091 17.5 34-4.502 4.837-10.002 8.003-16.5 9.5l-2.5 2.5a470.264 470.264 0 0 1 5.5 17.5c-1.5 12.833-8.667 20-21.5 21.5a470.264 470.264 0 0 1-17.5-5.5 4.457 4.457 0 0 0-2 1.5c-4.796 18.862-16.129 24.695-34 17.5-4.837-4.502-8.003-10.002-9.5-16.5l-2.5-2.5a470.264 470.264 0 0 1-17.5 5.5c-17.44-3.087-23.774-13.087-19-30 .667-3 .667-6 0-9a221.01 221.01 0 0 1-16-12c-7.047-15.197-2.88-26.03 12.5-32.5 3.703-3.396 4.869-7.563 3.5-12.5-4.791-16.413 1.209-26.413 18-30a148.918 148.918 0 0 1 18.5 5.5l2.5-2.5c1.739-9.895 7.239-16.561 16.5-20Z'
        style={{
          opacity: 1,
        }}
      />
      <path
        fill='#ff5a27'
        d='M285.5 47.5c2.825-.42 4.991.58 6.5 3 5.359 18.93 16.859 24.097 34.5 15.5 2-.667 4-.667 6 0a7.93 7.93 0 0 1 1 3.5 90.214 90.214 0 0 1-4.5 12c-.774 14.574 6.059 23.408 20.5 26.5 2.667 2.333 2.667 4.667 0 7-19.487 5.47-24.987 17.303-16.5 35.5 1.833 6.167-.333 8.333-6.5 6.5-18.198-8.487-30.032-2.987-35.5 16.5-2.333 2.667-4.667 2.667-7 0-5.526-19.388-17.36-24.888-35.5-16.5-2 .667-4 .667-6 0a7.93 7.93 0 0 1-1-3.5c6.038-17.74.704-30.573-16-38.5-2.765-2.966-2.432-5.633 1-8 11.168-4.515 16.835-12.849 17-25a172.639 172.639 0 0 1-1.5-15.5 7.93 7.93 0 0 1 3.5-1 90.3 90.3 0 0 1 12 4.5c8.086 1.045 14.92-1.455 20.5-7.5a144.615 144.615 0 0 1 7.5-15Z'
        style={{
          opacity: 1,
        }}
      />
      <path
        fill='#fee2ff'
        d='M63.5 48.5c18.984-.508 34.984 6.158 48 20 9.614-10.098 21.28-16.598 35-19.5 14.106-2.366 23.606 3.134 28.5 16.5a482.57 482.57 0 0 1-1 60c-10.801 35.162-34.634 51.662-71.5 49.5-29.7-6.033-47.867-23.867-54.5-53.5a784.21 784.21 0 0 1 0-56c2.962-7.79 8.129-13.457 15.5-17Z'
        style={{
          opacity: 1,
        }}
      />
      <path
        fill='#fc72ff'
        d='M66.5 64.5c23.47 2.46 38.47 15.126 45 38 5.325-18.49 16.992-30.99 35-37.5a25.249 25.249 0 0 1 10 0l1.5 1.5a358.82 358.82 0 0 1 1 53c-8.002 28.589-26.835 41.756-56.5 39.5-20.601-5.601-33.434-18.768-38.5-39.5-.667-17-.667-34 0-51a16.569 16.569 0 0 1 2.5-4Z'
        style={{
          opacity: 1,
        }}
      />
      <path
        fill='#ffd7cb'
        d='M285.5 86.5c4.989-.182 8.155 2.151 9.5 7a79.553 79.553 0 0 0 16 14c2.396 5.713.562 9.546-5.5 11.5a79.553 79.553 0 0 0-14 16c-5.713 2.396-9.546.562-11.5-5.5a79.553 79.553 0 0 0-16-14c-2.396-5.713-.562-9.546 5.5-11.5 5.965-5.456 11.299-11.29 16-17.5Z'
        style={{
          opacity: 1,
        }}
      />
      <path
        fill='#ff5a26'
        d='M285.5 101.5c5.455 1.444 9.455 4.777 12 10-2.333 4.333-5.667 7.667-10 10-4.333-2.333-7.667-5.667-10-10a57.217 57.217 0 0 1 8-10Z'
        style={{
          opacity: 1,
        }}
      />
      <path
        fill='#b4fcdd'
        d='M244.5 215.5c20.16-2.094 34.493 5.906 43 24 10.898-21.777 27.898-28.61 51-20.5 17.234 9.638 23.734 24.138 19.5 43.5-3.455 11.956-10.955 20.289-22.5 25 21.783 10.91 28.617 27.91 20.5 51-9.027 16.263-22.861 23.097-41.5 20.5-12.669-3.661-21.669-11.494-27-23.5-9.36 19.512-24.693 27.012-46 22.5-19.325-8.023-27.825-22.523-25.5-43.5 3.322-12.488 10.822-21.488 22.5-27-17.497-8.991-24.997-23.325-22.5-43 4.35-14.849 13.85-24.515 28.5-29Z'
        style={{
          opacity: 1,
        }}
      />
      <path
        fill='#d6d2fc'
        d='M63.5 223.5a31.819 31.819 0 0 1 12 1.5l17 10.5c8.058-11.613 18.391-14.113 31-7.5l7.5 7.5a398.508 398.508 0 0 0 15.5-10.5c13.43-3.701 22.93.799 28.5 13.5a25.238 25.238 0 0 1 0 10l-18.5 39a999.564 999.564 0 0 0 18.5 38c1.864 12.772-3.303 21.272-15.5 25.5a25.238 25.238 0 0 1-10 0 345.636 345.636 0 0 1-19-11.5c-8.194 11.455-18.527 13.955-31 7.5a66279.64 66279.64 0 0 1-7.5-7.5A412.215 412.215 0 0 1 75.5 350c-12.987 3.423-22.154-1.077-27.5-13.5a30.499 30.499 0 0 1 0-11 1001.018 1001.018 0 0 1 18.5-38 895.195 895.195 0 0 0-17.5-36c-3.361-13.611 1.472-22.944 14.5-28Z'
        style={{
          opacity: 1,
        }}
      />
      <path
        fill='#04f48e'
        d='M247.5 231.5c11.229-1.303 19.396 3.03 24.5 13a121.793 121.793 0 0 0 4 17c7.219 6.329 14.719 6.663 22.5 1 2.505-4.996 3.672-10.33 3.5-16 7.031-14.566 17.864-18.399 32.5-11.5 9.653 8.355 11.487 18.188 5.5 29.5a34.706 34.706 0 0 1-7.5 6.5 882.98 882.98 0 0 0-19 5c-6.511 7.618-6.511 15.284 0 23a170.551 170.551 0 0 1 21 6c12 11.667 12 23.333 0 35-12.485 6.63-22.651 4.13-30.5-7.5a116.824 116.824 0 0 1-4-18c-4.534-5.558-10.368-7.391-17.5-5.5-4.167 1.5-7 4.333-8.5 8.5-.255 18.259-9.422 26.759-27.5 25.5-11.759-5.017-16.592-13.85-14.5-26.5 5.705-11.777 15.205-17.277 28.5-16.5 5.618-4.925 7.451-11.092 5.5-18.5-1.593-3.928-4.427-6.428-8.5-7.5-18.238-.236-26.738-9.402-25.5-27.5 3.106-7.275 8.272-12.275 15.5-15Z'
        style={{
          opacity: 1,
        }}
      />
      <path
        fill='#3926f7'
        d='M65.5 239.5c1.7-.16 3.366.006 5 .5A347.373 347.373 0 0 0 97 257.5a6.202 6.202 0 0 0 3.5-2c7.051-19.961 14.217-19.961 21.5 0 .956 1.394 2.289 2.061 4 2a334.018 334.018 0 0 0 26.5-17.5c5.167-.833 7.333 1.333 6.5 6.5a2393.824 2393.824 0 0 0-20.5 41.5 767.91 767.91 0 0 0 20.5 40.5c.833 5.167-1.333 7.333-6.5 6.5a347.452 347.452 0 0 0-26.5-17.5 11.295 11.295 0 0 0-4 2 296.648 296.648 0 0 1-7.5 14.5c-1.667.667-3.333.667-5 0a88.56 88.56 0 0 1-7.5-13.5c-1.182-1.857-2.849-2.857-5-3A334 334 0 0 0 70.5 335c-5.167.833-7.333-1.333-6.5-6.5A2395.263 2395.263 0 0 0 84.5 287 2395.263 2395.263 0 0 0 64 245.5c-.41-2.195.09-4.195 1.5-6Z'
        style={{
          opacity: 1,
        }}
      />
    </svg>
  ) : null
}
