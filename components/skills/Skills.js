import { skills } from "lib/data";
import Tippy from '@tippyjs/react';

const Skills = () => {
    return (
        <div className='skills'>
            {skills.map((skill, skillKey) => (
                <Tippy content={skill.name} key={skillKey}>
                    <span>
                        <i className={skill.icon} />
                    </span>
                </Tippy>
            ))}
        </div>
    )
}

export default Skills;