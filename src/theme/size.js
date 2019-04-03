const scale = size => `${size / 1280 * 100}vw`

export default {
  50: scale(2),
  100: scale(4),
  150: scale(6),
  200: scale(8),
  250: scale(12),
  300: scale(16),
  350: scale(24),
  400: scale(32),
  450: scale(48),
  500: scale(64),
  550: scale(96),
  600: scale(128),
  650: scale(192),
  700: scale(256),
  750: scale(384),
  800: scale(512),
  850: scale(768),
  900: scale(1024),
  950: scale(1280),
}
