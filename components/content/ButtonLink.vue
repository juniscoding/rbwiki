<script setup lang="ts">
import { PinceauTheme } from 'pinceau'
import { computedStyle } from 'pinceau/runtime'

defineProps({
  blank: {
    type: Boolean,
    required: false,
    default: false
  },
  color: computedStyle<keyof PinceauTheme['color']>('red'),
  href: {
    type: String,
    required: true,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  ...variants
})
</script>

<template>
  <NuxtLink class="button-link" :to="href" :target="blank ? '_blank' : undefined">
    <Icon v-if="icon" :name="icon" />
    <ContentSlot :use="$slots.default" unwrap="p ul li" />
  </NuxtLink>
</template>

<style lang="ts" scoped>
css({
  '.button-link': {
    '--button-primary': (props) => `{color.red.700}`,
    '--button-secondary': (props) => `{color.red.600}`,
    display: 'inline-flex',
    flex: 'none',
    alignItems: 'center',
    borderRadius: '{radii.md}',
    transition: 'color 100ms ease-in-out',
    fontWeight: '{fontWeight.bold}',
    color: '{color.white}',
    backgroundColor: '{button.primary}',
    border: '1px solid transparent',
    '&:hover': {
      backgroundColor: '{button.secondary}'
    },
    '&:focus': {
      border: `1px solid {button.primary}`
    },
    '.icon': {
      marginInlineEnd: '{space.1}'
    }
  },
  variants: {
    size: {
      small: {
        padding: `{space.2} {space.4}`,
        fontSize: '{text.sm.fontSize}',
        lineHeight: '{text.sm.lineHeight}',
      },
      medium: {
        padding: `{space.rem.625} {space.5}`,
        fontSize: '{text.base.fontSize}',
        lineHeight: '{text.base.lineHeight}',
      },
      large: {
        padding: `{space.3} {space.6}`,
        fontSize: '{text.lg.fontSize}',
        lineHeight: '{text.lg.lineHeight}',
      },
      giant: {
        padding: `{space.4} {space.8}`,
        fontSize: '{text.lg.fontSize}',
        lineHeight: '{text.lg.lineHeight}',
      },
      options: {
        default: 'medium'
      }
    },
    transparent: {
      true: {
        backgroundColor: `transparent`,
      }
    }
  }
})
</style>
