import './footer.css'

const Footer = () => {
    return (
        <footer id='footer'>
            <h3>
                Click on the hamburger menu in the upper right portion of the window
                to quickly navigate between sections of this site! &#8599;
            </h3>
            <h2>This site is still being updated for 2024! Check back later for additional updates.</h2>
            <div className="footer-img-grid">
                <img src="../src/assets/AllCarolers2019.jpg" alt="2019 carolers" />
                <img src="../src/assets/ChelseaCarl.jpg" alt="Chelsea with Carl"/>
                <img src="../src/assets/AlenaCarl.jpg" alt='Alena with Carl' />
                <img src="../src/assets/randomfriends.jpg" alt='random friends'/>
                <img src="../src/assets/2016 Xmas team photo.jpg" alt='2016 Christmas team'/>
                <img src="../src/assets/Vitality Bird's Nests and Chicken Essence.jpg" alt='funny sign in drug store'/>
                <img src="../src/assets/Cute HK Kids.jpg" alt='cute Hong Kong kids'/>
                <img src="../src/assets/HK Sunset Skyline.jpg" alt='HK sunset skyline'/>
                <img src="../src/assets/TL_Quartet_2022.jpeg" alt='2022 carolers performing the Tree Lighting show'/>
                <img src="../src/assets/Carolers_Silly_2022.jpeg" alt='2022 carolers acting silly'/>
                <img src="../src/assets/HKDL_Castle_2022.jpeg" alt='HKDL Castle of Magical Dreams at night, 2022'/>
                <img src="../src/assets/HKDL_Carolers_LKF_2019.jpeg" alt='2019 Carolers living it up in Lan Kwai Fong'/>
                <img src="../src/assets/Max_HKDL_2022.jpeg" alt='Max performing at HKDL, 2022'/>
                <img src="../src/assets/HKDL_Carolers_2022_LastLooks.jpeg" alt='Hanging out one last time at the IFC rooftop terrace, 2022'/>
            </div>
            
            
            <h3>Only because it was requested, here are the Disney <em>acappella</em> parodies I put together in the first months of the pandemic:</h3> 
            <iframe width="560" height="315" src="https://www.youtube.com/embed/a_XCrClEFvE" frameorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Disney parody video Social Distance'></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ljtlm2LYiLo" frameorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='Disney parody video Best If You Stay Home'></iframe>
        </footer>
    )
}

export default Footer