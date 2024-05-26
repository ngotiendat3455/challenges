import React from 'react';

const Logo: React.FC = () => {
    return (
        <a href="#"
            className='nfLogo'
            onClick={(e) => {
                e.preventDefault()
            }}>
            <svg
                className="svg-icon svg-icon-n-logo"
                focusable="false"
                viewBox="225 0 552 1000"
                aria-hidden="true"
                data-uia="n-logo"
            >
                <defs>
                    <radialGradient
                        id="2d5fd55f-004f-4793-ac02-ed226f9104a0-a"
                        r="75%"
                        gradientTransform="matrix(.38 0 .5785 1 .02 0)"
                    >
                        <stop offset="60%" stopOpacity=".3" />
                        <stop offset="90%" stopOpacity=".05" />
                        <stop offset="100%" stopOpacity={0} />
                    </radialGradient>
                </defs>
                <path d="M225 0v1000c60-8 138-14 198-17V0H225" fill="#b1060e" />
                <path d="M579 0v983c71 3 131 9 198 17V0H579" fill="#b1060e" />
                <path
                    d="M225 0v200l198 600V557l151 426c76 3 136 9 203 17V800L579 200v240L423 0H225"
                    fill="url(#2d5fd55f-004f-4793-ac02-ed226f9104a0-a)"
                />
                <path d="M225 0l349 983c76 3 136 9 203 17L423 0H225" fill="#e50914" />
            </svg>
        </a>

    )
}

export default Logo;