import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { Tabs, Tab, Typography, Box } from '@mui/material'

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`
    }
}

function VerticalTabs() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <motion.Box
            className="experience--container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <Tabs
                className='experience--tabs'
                orientation="vertical"
                value={value}
                onChange={handleChange}
                sx={{ borderRight: 1, borderColor: 'divider' }}
                variant="fullWidth"
                centered
                TabIndicatorProps={{
                    style: {
                        backgroundColor: "#0b132b"
                    }
                }}
            >
                <Tab
                    className="experience--label"
                    label="Symmetry Laser"
                    {...a11yProps(0)}
                />
                <Tab
                    className="experience--label"
                    label="AIVision Food"
                    {...a11yProps(0)}
                />
                <Tab
                    className="experience--label"
                    label="AggieWorks"
                    {...a11yProps(0)}
                />
                <Tab
                    className="experience--label"
                    label="Computers 4 Kids"
                    {...a11yProps(1)}
                />
                <Tab
                    className="experience--label"
                    label="IEEE"
                    {...a11yProps(2)}
                />
            </Tabs>
            <TabPanel className="experience--panel" value={value} index={0}>
                <h3 className="experience--name">Software Engineering Intern</h3>
                <p className="experience--subtitle">May 2023 - Present</p>
                <ul>
                    <li className="experience--bullet">
                        Incoming Software Engineering Intern
                    </li>
                    <li className="experience--bullet">
                        Using <strong>Python</strong> for automation and optimizing tasks
                    </li>
                </ul>
            </TabPanel>
            <TabPanel className="experience--panel" value={value} index={1}>
                <h3 className="experience--name">Hardware/Software Developer</h3>
                <p className="experience--subtitle">March 2023 - Present</p>
                <ul>
                    <li className="experience--bullet">
                        Working in Dr. Pan's research lab to help develop SmartProbe that uses image processing to detect inserts
                    </li>
                    <li className="experience--bullet">
                        Utilizing <strong>ESP32 Microcontroller</strong> and <strong>C++</strong>
                    </li>
                    <li className="experience--bullet">
                        Designing and implementing a remote access point for probes using <strong>Raspberry Pi</strong> and <strong>Python</strong>
                    </li>
                </ul>
            </TabPanel>
            <TabPanel className="experience--panel" value={value} index={2}>
                <h3 className="experience--name">Software Engineer</h3>
                <p className="experience--subtitle">January 2023 - Present</p>
                <ul>
                    <li className="experience--bullet">
                        Collaborated with a team of 13 developers, designers,
                        and project managers in an <strong>AGILE</strong> work
                        environment to build a roommate matching app using{' '}
                        <strong>React Native</strong>,{' '}
                        <strong>TypeScript</strong>, and{' '}
                        <strong>Supabase</strong>
                    </li>
                    <li className="experience--bullet">
                        Implemented a filtering system to allow students to
                        match based on their preferences
                    </li>
                    <li className="experience--bullet">
                        Incorporated data validation and error handling to
                        prevent data inconsistencies and improve data integrity
                    </li>
                </ul>
            </TabPanel>
            <TabPanel className="experience--panel" value={value} index={3}>
                <h3 className="experience--name">Website Editor Intern</h3>
                <p className="experience--subtitle">October 2022 - Present</p>
                <ul>
                    <li className="experience--bullet">
                        Contributed to the design and maintenance of a
                        non-profit website aimed at providing technology access
                        to underprivileged communities
                    </li>
                    <li className="experience--bullet">
                        Developed and implemented web pages using{' '}
                        <strong>HTML</strong> and <strong>CSS</strong> to
                        promote e-waste recycling and affordable internet access
                        opportunities
                    </li>
                    <li className="experience--bullet">
                        Worked in a collaborative team environment to achieve
                        the organization’s goals
                    </li>
                </ul>
            </TabPanel>
            <TabPanel className="experience--panel" value={value} index={4}>
                <h3 className="experience--name">Treasurer</h3>
                <p className="experience--subtitle">December 2021 - Present</p>
                <ul>
                    <li className="experience--bullet">
                        Collaborated with finance team and other officers to
                        acquire sponsorships and funding for events with up to{' '}
                        <strong>120</strong> attendees, comprising of students,
                        faculty, and industry professionals
                    </li>
                    <li className="experience--bullet">
                        Managed and processed reimbursements and purchases for
                        over <strong>30</strong> transactions
                    </li>
                    <li className="experience--bullet">
                        Secured and allocated a budget of over{' '}
                        <strong>$8,000</strong> for workshops, company
                        representative events, and social gatherings that helped
                        students develop their career goals and deepen their
                        understanding of engineering fundamentals
                    </li>
                </ul>
            </TabPanel>
        </motion.Box>
    )
}

export default function Experience() {
    return (
        <section id="experience" className="section--experience">
            <motion.h1
                className="title experience--title"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
            >
                Experience
            </motion.h1>
            <VerticalTabs />
        </section>
    )
}
