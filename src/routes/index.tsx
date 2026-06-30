import { createFileRoute } from '@tanstack/react-router'

import Heading from './-components/index/Heading/Heading'

import Para from './-components/index/Para/Para'

import styles from './index.module.css';

import Button from './-components/shared/Button';

import Image from './-components/index/Image/Image';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className={styles.main}>
        <Heading />
        <Para />
        <Button text='Get Started' />
        <Image />
    </main>
  )
}
