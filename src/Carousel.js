import React from 'react';
import './Carousel.css';
import Slide from './Slide';
import IntroSlide from './IntroSlide';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
            fromRight: true,
        };
    }

    clock(index) {
        if (index < 0) {
            return this.props.data.length - 1;
        } else if (index >= this.props.data.length) {
            return 0;
        }

        return index;
    }

    setSlide(fromRight) {
        const offset = fromRight ? 1 : -1;
        const newPosition = this.clock(this.state.currentSlide + offset);
        this.setState({
            currentSlide: newPosition,
            fromRight: fromRight,
        });
    }

    renderSlide(className, id) {
        const project = this.props.data[id];

        if(id === 0) {
            return <IntroSlide
                className={className}
                title={project.title}
                img={project.img}
                text={project.text}
                key={id}
            />
        }

        return <Slide
            className={className}
            srclink={project.srclink}
            livelink={project.livelink}
            img={project.img}
            desc={project.desc}
            title={project.title}
            key={id}
        />;
    }

    render() {
        const currSlideIndex = this.state.currentSlide;
        const rightSlideIndex = this.clock(currSlideIndex + 1);
        const leftSlideIndex = this.clock(currSlideIndex - 1);

        let rightSlideClass = "carousel-slide carousel-slide-right";
        let leftSlideClass = "carousel-slide carousel-slide-left";

        if(this.state.fromRight) {
            leftSlideClass += " carousel-slide-animate";
        } else {
            rightSlideClass += " carousel-slide-animate";
        }

        const slides = [
            this.renderSlide(rightSlideClass, rightSlideIndex),
            this.renderSlide("carousel-slide carousel-slide-animate", currSlideIndex),
            this.renderSlide(leftSlideClass, leftSlideIndex)
        ];

        return (
            <div className="carousel">
                <div className="carousel-btn carousel-btn-left" onClick={() => this.setSlide(false)}>
                    &#9001;
                </div>
                {slides}
                <div className="carousel-btn carousel-btn-right" onClick={() => this.setSlide(true)}>
                    &#9002;
                </div>
            </div>
        );
    }
}

export default Carousel;