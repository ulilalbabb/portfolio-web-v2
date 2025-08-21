import Button from "../Button/Button"

const HeroSection = () => {
    return (
        <section 
            className="h-screen flex flex-col items-center justify-center bg-gray-100"
            id="home">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Portfolio</h1>
            <p className="text-lg text-gray-600">Explore my projects and skills.</p>
            <Button variant="primary" >Learn More</Button>

        </section>
    )
}

export default HeroSection