import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/common/Layout'
import './about-us.scss'

const Page = () => (
	<Layout>
		<Helmet>
			<title>About the Open Accessible Internet | Orchid</title>
			<meta name="description" content="We believe the internet should be open and accessible to everyone, which is why we\'re building a truly open source network overlay VPN." />
			<meta name="og:image" content="https://www.orchid.com/img/company/splash/social.png" />
		</Helmet>
		<div class="about-company__page-container">
			<div class="bk-beige-light about-company__splash-container">
				<section class="about-company__splash">
					<div class="about-company__splash-text-container">
						<h1 i18n="@@AboutCompanyHero__Title">
							We can <br />
							reclaim the <br />
							internet <br />
							<span class="big">
								together
							</span>
						</h1>
					</div>
					<div class="about-company__splash-image-container">
						<img src="/img/company/splash/splash-foreground.svg" width="868" height="706" alt="splash image" />
					</div>
				</section>
			</div>

			<div class="about-company__centered-text-section-container">
				<div class="about-company__centered-text-floating-circle-1"></div>
				<div class="about-company__centered-text-floating-circle-2"></div>

				<section class="about-company__centered-text-section section-med hpad-wide vpad-wide center-text" i18n="@@AboutCompany__Description">
					<h2>Why build a privacy network?</h2>
					<p>
						The Internet opened up an unlimited world of information.Its creators invited us to bring our curiosity and
						explore that world freely.
					</p>

					<p>
						As the Internet grew, exploring freely became harder.Web 2.0 business models incentivized companies to watch
						and track us and sell our data.And in some places, limits were placed on the information we can see.
					</p>

					<p>
						But that is changing.The decentralized Web 3.0 being built on Ethereum is allowing the Internet to be reclaimed
						by its users.
					</p>

					<p>
						At Orchid we share in this mission.We use Web 3.0 technology to offer users better digital privacy today, so we
						can realize the promise of the Web 1.0 and explore freely again.
					</p>

					<p>
						Orchid was founded in 2017 to help restore the open and accessible Internet for everyone.Since then, we have
						grown an incredible team based in San Francisco and Berlin and launched the first incentivized, peer-to-peer
						privacy network in December, 2019.
					</p>
				</section>
			</div>

			<div class="bk-beige-light" id="values">
				<section class="section-med hpad-wide vpad-wide">
					<h2>Our Values</h2>
					<div class="about-us-split">
						<div class="about-us-half">
							<p>
								The Internet is as integral to modern life as writing was to the ancient Greeks.Our lives are digital, and the ramifications of the things we do and say online are as real as those in the physical world.Orchid grew from the dream of a future in which our whole lives--both the physical and the digital--could be private , decentralized, and censorship-free.
							</p>

							<p>
								Orchid’s mission is privacy, and privacy is a human right.
							</p>

							<p>
								Privacy is an easy target for those in power, who say “if you have nothing to hide, you have nothing to fear.” This is a lie.The truth is that the people in positions of power have the least to worry about being private.If a powerful dictator is caught doing something, they are beyond reproach.We should never forget the routine violations of privacy visited upon King, Gandhi, Ai Weiwei and many others in the name of “law enforcement” and “national security.”
							</p>
						</div>
						<div class="about-us-half">
							<picture>
								<source srcset="/img/company/ValuesBunny.webp" type="image/webp" />
								<img src="/img/company/ValuesBunny.png" width="1000" height="1055" />
							</picture>
						</div>
					</div>



					<p>
						Privacy and freedom are not in conflict; they are one and the same.
					</p>

					<p>
						We stand in solidarity with causes dedicated to privacy and to other fundamental human rights.Movements that fight for freedom and equality, that fight against oppression and censorship, that help by creating the tools to level the playing field for all.
					</p>

					<p>
						Causes such as Black Lives Matter; Uyghur liberation; political freedom in Hong Kong and Myanmar, LGBTQ+ rights in Russia and many others must be fought for at the fundamental, human level.They should cut across lines of politics, nationality, or sectarianism.
					</p>

					<p>
						The past year has reminded us that humans are meant to be together, not alone; free, not confined; empowered, not controlled.It is this basic truth that motivates the people who built Orchid.
					</p>
				</section>

			</div>

			<div class="bk-lavender">
				<section class="about-company__team-section hpad-wide vpad-wide">
					<div class="about-company__team-text">
						<h2 i18n="@@OrchidTeamTitle">The Orchid Team</h2>
						<p i18n="@@OrchidTeamDescription">
							Orchid’s founders bring together deep experience in the open source software community (BASH Shell, GNU
							Finger), technology management (RPX IPO), blockchain investment (Bitstamp, Pantera Capital), jailbroken app
							package management (Cydia) and security (Wells Fargo’s 1st Online Banking employee, Ethereum core security
							team).
						</p>
					</div>

					<div class="about-company__team about-company__team-big">
						<div class="about-company-team-member">
							<img src="/img/company/staff/DrStevenWaterhouse.png" alt="Dr. Steven Waterhouse" />
							<h5 i18n="@@OrchidTeam_DrStevenWaterhouse">
								Dr.Steven Waterhouse
							</h5>
							<p i18n="@@OrchidTeam_CoFounderCEO">
								Co-Founder / CEO
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/JayFreeman.png" alt="Jay Freeman" />
							<h5 i18n="@@OrchidTeam_JayFreeman">
								Jay Freeman
							</h5>
							<p i18n="@@OrchidTeam_CoFounderCTO">
								Co-Founder / CTO
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/BrianJFox.png" alt="Brian J. Fox" />
							<h5 i18n="@@OrchidTeam_BrianJFox">
								Brian J.Fox
							</h5>
							<p i18n="@@OrchidTeam_CoFounder">
								Co-Founder
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/GustavSimonsson.png" alt="Gustav Simonsson" />
							<h5 i18n="@@OrchidTeam_GustavSimonsson">
								Gustav Simonsson
							</h5>
							<p i18n="@@OrchidTeam_CoFounderAdvisor">
								Co-Founder / Advisor
							</p>
						</div>
					</div>

					<hr />

					<div class="about-company__team about-company__team-small">

						<div class="about-company-team-member">
							<img src="/img/company/staff/AlexKehaya.png" alt="Alex Kehaya" />
							<h5 i18n="@@OrchidTeam_AlexKehaya">
								Alex Kehaya
							</h5>
							<p i18n="@@OrchidTeam_BusinessDevelopment">
								Business Development
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/DerekSilva.png" alt="Derek Silva" />
							<h5 i18n="@@OrchidTeam_DerekSilva">
								Derek Silva
							</h5>
							<p i18n="@@OrchidTeam_Community">
								Community
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/PaulaKanin.png" alt="Paula Kanin" />
							<h5 i18n="@@OrchidTeam_PaulaKanin">
								Paula Kanin
							</h5>
							<p i18n="@@OrchidTeam_Community">
								Community
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/ShawneeNova.png" alt="Shawnee Nova" />
							<h5 i18n="@@OrchidTeam_ShawneeNova">
								Shawnee Nova
							</h5>
							<p i18n="@@OrchidTeam_Community">
								Community
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/ChadHarper.png" alt="Chad Harper" />
							<h5 i18n="@@OrchidTeam_ChadHarper">
								Chad Harper
							</h5>
							<p i18n="@@OrchidTeam_Design">
								Design
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/SaskiaEssex.png" alt="Saskia Essex" />
							<h5 i18n="@@OrchidTeam_SaskiaEssex">
								Saskia Essex
							</h5>
							<p i18n="@@OrchidTeam_Design">
								Design
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/ThientamBach.png" alt="Thientam Bach" />
							<h5 i18n="@@OrchidTeam_ThientamBach">
								Thientam Bach
							</h5>
							<p i18n="@@OrchidTeam_Design">
								Design
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/AlexandraMcolgan.png" alt="Alexandra McColgan" />
							<h5 i18n="@@OrchidTeam_AlexandraMcColgan">
								Alexandra McColgan
							</h5>
							<p i18n="@@OrchidTeam_EA">
								EA
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/MichelleUnderwood.png" alt="Michelle Underwood" />
							<h5 i18n="@@OrchidTeam_MichelleUnderwood">
								Michelle Underwood
							</h5>
							<p i18n="@@OrchidTeam_EA">
								EA
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/DanMontgomery.png" alt="Dan Montgomery" />
							<h5 i18n="@@OrchidTeam_DanMontgomery">
								Dan Montgomery
							</h5>
							<p i18n="@@OrchidTeam_Engineering">
								Engineering
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/GregHazel.png" alt="Greg Hazel" />
							<h5 i18n="@@OrchidTeam_GregHazel">
								Greg Hazel
							</h5>
							<p i18n="@@OrchidTeam_Engineering">
								Engineering
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/JakeCannell.png" alt="Jake Cannell" />
							<h5 i18n="@@OrchidTeam_JakeCannell">
								Jake Cannell
							</h5>
							<p i18n="@@OrchidTeam_Engineering">
								Engineering
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/JenniferRodriguez-Miller.png" alt="Jennifer Rodriguez-Miller" />
							<h5 i18n="@@OrchidTeam_JenniferRodriguez-Miller">
								Jennifer Rodriguez-Miller
							</h5>
							<p i18n="@@OrchidTeam_Engineering">
								Engineering
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/JustinSheek.png" alt="Justin Sheek" />
							<h5 i18n="@@OrchidTeam_JustinSheek">
								Justin Sheek
							</h5>
							<p i18n="@@OrchidTeam_Engineering">
								Engineering
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/AnnaBare.png" alt="Anna Bare" />
							<h5 i18n="@@OrchidTeam_AnnaBare">
								Anna Bare
							</h5>
							<p i18n="@@OrchidTeam_Engineering">
								Engineering
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/PatrickNiemeyer.png" alt="Patrick Niemeyer" />
							<h5 i18n="@@OrchidTeam_PatrickNiemeyer">
								Patrick Niemeyer
							</h5>
							<p i18n="@@OrchidTeam_Engineering">
								Engineering
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/SelinaCheng.png" alt="Selina Cheng" />
							<h5 i18n="@@OrchidTeam_SelinaCheng">
								Selina Cheng
							</h5>
							<p i18n="@@OrchidTeam_Finance">
								Finance
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/JoyHu.png" alt="Joy Hu" />
							<h5 i18n="@@OrchidTeam_JoyHu">
								Joy Hu
							</h5>
							<p i18n="@@OrchidTeam_Finance">
								Finance
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/PatrickJDietzen.png" alt="Patrick J. Dietzen" />
							<h5 i18n="@@OrchidTeam_PatrickJDietzen">
								Patrick J.Dietzen
							</h5>
							<p i18n="@@OrchidTeam_Finance">
								Finance
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/AmandaGutterman.png" alt="Amanda Gutterman" />
							<h5 i18n="@@OrchidTeam_AmandaGutterman">
								Amanda Gutterman
							</h5>
							<p i18n="@@OrchidTeam_Marketing">
								Marketing
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/MonicaPuchner.png" alt="Monica Puchner" />
							<h5 i18n="@@OrchidTeam_MonicaPuchner">
								Monica Puchner
							</h5>
							<p i18n="@@OrchidTeam_Operations">
								Operations
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/TravisCanell.png" alt="Travis Cannell" />
							<h5 i18n="@@OrchidTeam_TravisCannell">
								Travis Cannell
							</h5>
							<p i18n="@@OrchidTeam_Product">
								Product
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/MattRoszak.png" alt="Matt Roszak" />
							<h5 i18n="@@OrchidTeam_MattRoszak">
								Matt Roszak
							</h5>
							<p i18n="@@OrchidTeam_Advisor">
								Advisor
							</p>
						</div>

						<div class="about-company-team-member">
							<img src="/img/company/staff/RichStarpoli.png" alt="Rich Staropoli" />
							<h5 i18n="@@OrchidTeam_RichStaropoli">
								Rich Staropoli
							</h5>
							<p i18n="@@OrchidTeam_Advisor">
								Advisor
							</p>
						</div>

					</div>
				</section>
			</div>

			<div>
				<section class="about-company__corporate-info-section section-med hpad-wide vpad-wide">
					<div id="corporate-header">
						<h2 i18n="@@AboutCompanyCorporate__Title">Corporate info</h2>
						<p i18n="@@AboutCompanyCorporate__Subtitle">Orchid is a Delaware c-corp</p>
					</div>
					<div id="corporate-address">
						<address i18n="@@AboutCompanyCorporate__Address">
							Headquarters: <br />
							1288 Columbus Ave.#122,<br />
							San Francisco, CA 94133
						</address>
						<address i18n="@@AboutCompanyCorporate__Address2">
							Europe: <br />
							Skalitzer Str.85,<br />
							10997 Berlin, Germany
						</address>
					</div>
					<div class="z-index-1" id="corporate-buttons">
						<a href="https://www.sec.gov/Archives/edgar/data/1721086/000172108618000001/xslFormDX01/primary_doc.xml" target="_blank" rel="noreferrer"><button class="btn-primary btn-fixed" i18n="@@AboutCompanyCorporate__SECFilingButton">SEC Filing</button></a>
						<br />
						<a href="/OrchidPressKit.zip" target="_blank" rel="noreferrer"><button class="btn-primary btn-fixed" i18n="@@AboutCompanyCorporate__PressKitButton">Press Kit</button></a>
					</div>
					<div class="adorner" id="buttons-adorner">
						<div class="pos-relative">
							<img alt="" class="adorner-image" src="/img/company/buttons-adorner.png" />
						</div>
					</div>
				</section>
			</div>

		</div >

		<app-newsletter-signup></app-newsletter-signup>
	</Layout >
)

export default Page
