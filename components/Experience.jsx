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
                className="experience--tabs"
                orientation="vertical"
                value={value}
                onChange={handleChange}
                sx={{ borderRight: 1, borderColor: 'divider' }}
                variant="fullWidth"
                centered
                TabIndicatorProps={{
                    style: {
                        backgroundColor: '#0b132b'
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
                <h3 className="experience--name">
                    Software Engineering Intern
                </h3>
                <p className="experience--subtitle">June 2023 - Present</p>
                <ul>
                    <li className="experience--bullet">
                        Employed <strong>Flask</strong> and efficient{' '}
                        <strong>SQL</strong> queries to optimize graphical data
                        visualizations featuring real-time updates and better
                        stability
                    </li>
                    <li className="experience--bullet">
                        Minimized the number of late jobs by <strong>30%</strong> with an
                        efficient job scheduling algorithm and built a
                        full-stack application using <strong>React</strong>
                    </li>
                    <li className="experience--bullet">
                        Reduced upload time for logging application events by{' '}
                        <strong>50%</strong> from 8 to 4 seconds and revamped
                        functionality using <strong>Python</strong> and{' '}
                        <strong>InfluxDB</strong>
                    </li>
                    <li className="experience--bullet">
                        Streamlined PDF filing process by developing a{' '}
                        <strong>PySide</strong> application, saving countless
                        hours of manual work
                    </li>
                    <li className="experience--bullet">
                        Used <strong>Grafana</strong> and{' '}
                        <strong>InfluxDB</strong> for clear and informative
                        time-series data visualizations
                    </li>
                </ul>
            </TabPanel>
            <TabPanel className="experience--panel" value={value} index={1}>
                <h3 className="experience--name">Hardware/Software Engineer</h3>
                <p className="experience--subtitle">March 2023 - June 2023</p>
                <ul>
                    <li className="experience--bullet">
                        Conducted comprehensive testing and validation
                        procedures on SmartProbe to ensure optimal reliability
                        and accuracy, identifying and resolving potential issues
                        proactively
                    </li>
                    <li className="experience--bullet">
                        Implemented improvements to enhance the battery
                        longevity of the device by redesigning battery
                        percentage thresholds through rigorous testing,
                        resulting in improved user experience
                    </li>
                    <li className="experience--bullet">
                        Collaborated in team of 5 to design a remote access
                        point using <strong>Raspberry Pi</strong>
                    </li>
                </ul>
            </TabPanel>
            <TabPanel className="experience--panel" value={value} index={2}>
                <h3 className="experience--name">Software Engineer</h3>
                <p className="experience--subtitle">January 2023 - Present</p>
                <ul>
                    <li className="experience--bullet">
                        Collaborated with a team of 20 developers, designers,
                        and project managers in an <strong>AGILE</strong> work
                        environment to build applications for nearly{' '}
                        <strong>40,000</strong> students using{' '}
                        <strong>React</strong>, <strong>TypeScript</strong>,{' '}
                        <strong>Supabase</strong>, and <strong>Prisma</strong>
                    </li>
                    <li className="experience--bullet">
                        Reduced API latency caused by storing data and images by{' '}
                        <strong>80%</strong> from 5 seconds to 1 second,
                        resulting in faster load times
                    </li>
                    <li className="experience--bullet">
                        Implemented responsive user interfaces using{' '}
                        <strong>Next.js</strong>, leveraging the power of React
                        and server-side rendering, resulting in higher user
                        engagement
                    </li>
                    <li className="experience--bullet">
                        Refined filtering system to allow students to match
                        based on their preferences, resulting in higher user
                        engagement
                    </li>
                    <li className="experience--bullet">
                        Incorporated data validation and error handling to
                        prevent data inconsistencies and improve data integrity
                    </li>
                </ul>
            </TabPanel>
            <TabPanel className="experience--panel" value={value} index={3}>
                <h3 className="experience--name">Website Technician</h3>
                <p className="experience--subtitle">October 2022 - Present</p>
                <ul>
                    <li className="experience--bullet">
                        Cooperated in a team of 6 people on the design and
                        maintenance of a non-profit website aimed at providing
                        technology access to underprivileged communities
                    </li>
                    <li className="experience--bullet">
                        Increased unique site visitors by <strong>50%</strong>{' '}
                        and accumulated over <strong>25,000</strong> page views
                        by developing web pages using HTML and CSS that promoted
                        e-waste recycling and affordable internet access
                        opportunities
                    </li>
                </ul>
            </TabPanel>
            <TabPanel className="experience--panel" value={value} index={4}>
                <h3 className="experience--name">Treasurer</h3>
                <p className="experience--subtitle">
                    December 2021 - June 2023
                </p>
                <ul>
                    <li className="experience--bullet">
                        Led finance team to acquire sponsorships and funding for
                        events with up to <strong>120</strong> attendees,
                        comprising of students, faculty, and industry
                        professionals
                    </li>
                    <li className="experience--bullet">
                        Managed and processed reimbursements and purchases for
                        over <strong>50</strong> transactions
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
