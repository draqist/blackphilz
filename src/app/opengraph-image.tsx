import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'Blackphilz';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 140,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 900,
          letterSpacing: '-0.05em',
          textTransform: 'uppercase',
          fontFamily: 'Satoshi',
        }}
      >
        Blackphilz
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
