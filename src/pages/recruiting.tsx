import React from 'react'

import IndexLayout from '../layouts'
import Banner from '../components/Banner'
import Cloud from '../resources/cloud.png'
import Features from '../components/Features'
import Feature from '../components/Feature'
import Quote from '../components/Quote'
import RecruitingBG from '../resources/recruiting-bg.png'
import Bg from '../components/Bg'
import ActionCard from '../components/ActionCard'
import Details from '../components/Details'

const RecrutingPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/recruting/'>
        <div className="grey-container">

            {/* ----- Banner ----- */}

            <Banner
                subtitle="Gitpod Recruiting"
                title={<h1>Make Sure You’re <strong>Discovering Your<br />Best Applicants</strong></h1>}
                linkPath="#"
                linkText="Choose your Solution"
                img={<img alt="Cloud" src={Cloud}/>}
            />

            {/* ----- Section Features ----- */}

            <Features title="Provide Coding Exercises Within Seconds">
                <Feature
                    title="Controlled Environment"
                    paragraphs={['With Gitpod you eliminate the risk of losing time for code exercises due to broken setup. And it also guarantees that all applicants have the same environment and thereby the same preconditions.', 'Gitpod can guide applicants through exercises without you being involved.']}
                />
                <Feature
                    title="Monitor Action of Applicants"
                    paragraphs={['TBD']}
                />
                <Feature
                    title="Easy to Integrate"
                    paragraphs={['Thanks to custom OAuth, Gitpod is easy to integrate.', 'Use API to create or delete workspaces, and to download workspaces.']}
                />
                <Feature
                    title="Cost Effective"
                    paragraphs={['The costs are based on running workspaces, so that you only need to pay if Gitpod is used.']}
                />
                <Feature
                    title="Interactions During Exercises"
                    paragraphs={['Via live shared workspaces you are able to interact with applicants during their coding exercise.']}
                />
            </Features>
        </div>

        {/* ----- Quote ----- */}

        <Quote
            title="We create the most convenient dev environments."
        />

        {/* ----- BG ----- */}

        <Bg url={RecruitingBG} />

        {/* ----- Didn't find ----- */}

        <ActionCard
            title='Didn’t find what you’re looking for?'
            text='Please, get in touch. We’re happy to answer your questions.'
            anchors={[{href: '/schedule-call',text: 'Schedule a Call'}, {href: '/contact', text: 'Contact'}]}
        />

        <Details
            title="Explore Gitpod"
            text="Learn about collaboration, workspace snapshots, supported programming languages, and much more."
            anchors={[{href: '/blog', text: 'See Blog'}, {href: '/features', text: 'See Features'}]}
        />


    </IndexLayout>
)

export default RecrutingPage