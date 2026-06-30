import { type ReactNode } from 'react';

import personOne from "@/images/index/person_1.png";

import personTwo from "@/images/index/person_2.png";

import personThree from "@/images/index/person_3.png";

import styles from './Image.module.css';

import { Ellipsis } from 'lucide-react';

export default function Image () : ReactNode {

    return (
        <div className={styles.imageWrapper}>
            <img
                className={styles.animatedPerson}
                src={personOne}
                alt="picture of animated person"
            />
            <img
                className={styles.animatedPerson}
                src={personTwo}
                alt="picture of animated person"
            />
            <img
                className={styles.animatedPerson}
                src={personThree}
                alt="picture of animated person"
            />
            <div className={styles.imageBottomWrapper}>
                <header>
                    <p className={styles.text}>Download todo app</p>
                    <Ellipsis color='#B2AFA1'/>
                </header>
                <small className={styles.textSmall}>the first step for better life</small>
                <footer>
                    <div className={styles.circleWrapper}>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                    </div>
                    <form className={styles.imageForm}>
                        <input type="checkbox" checked={true} />
                        <label>Done</label>
                    </form>
                </footer>
            </div>
        </div>
    );
}