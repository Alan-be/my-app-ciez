'use client';

import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Text,
  Heading,
  TextProps,
  HeadingProps,
  chakra,
} from '@chakra-ui/react';

const MotionSpan = motion(chakra.span);

type ElementType = 'text' | 'heading' | 'span';

type TypingEffectProps =
  | ({
      elementType?: 'heading';
      text?: string;
      className?: string;
    } & HeadingProps)
  | ({
      elementType?: 'text';
      text?: string;
      className?: string;
    } & TextProps)
  | ({
      elementType: 'span';
      text?: string;
      className?: string;
    } & React.HTMLAttributes<HTMLSpanElement>);

export function TypingEffect({
  text = 'Typing Effect',
  elementType = 'text',
  className = '',
  ...props
}: TypingEffectProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const renderedText = text.split('').map((letter, index) => (
    <MotionSpan
      key={index}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.2, delay: index * 0.1 }}
    >
      {letter}
    </MotionSpan>
  ));

  const baseProps = {
    ref,
    className,
    children: renderedText,
    ...props,
  };

  switch (elementType) {
    case 'heading':
      return <Heading {...(baseProps as HeadingProps)} />;
    case 'span':
      return <span {...(baseProps as React.HTMLAttributes<HTMLSpanElement>)} />;
    case 'text':
    default:
      return <Text {...(baseProps as TextProps)} />;
  }
}
