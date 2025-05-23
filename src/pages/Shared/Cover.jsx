import { Parallax } from 'react-parallax'

const Cover = ({ img, title, des }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the menu"
                strength={-200}
            >
                <div
                    className="hero min-h-[70vh]"
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content max-w-screen-2xl min-w-[400px] min-h-48 bg-black/40 text-neutral-content text-center">
                        <div className="px-20 py-5 rounded-lg">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">
                                {
                                    des ? des : "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </Parallax>

        </div>
    )
}

export default Cover